import React, {useState, useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import CustomToolTip from './CustomToolTip'

import headtohead from '../api/headtohead'

const MatchupRecordDisplay = ({leftTeam, rightTeam, teamInfo}) => {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        const callHeadToHeadData = async () => {
            const getHeadData = await headtohead(teamInfo[leftTeam].id, teamInfo[rightTeam].id)
            setMatches(getHeadData.response)
        }
        callHeadToHeadData()
    }, [leftTeam, rightTeam, teamInfo])
    console.log("matches", matches)

    const renderMatches = () => {
        return matches.map((match) => {
            // we only want to show games that are finished
            if (match.status.long === "Game Finished") {
                const red = "#ef9a9a"
                const green = "#c5e1a5"
                let leftTeamLabel = ""
                let rightTeamLabel = ""
                let awayWon = true
                let leftColor = green
                let rightColor = red
                // check to see which side is home and away
                if (leftTeam === match.teams.away.name) {
                    leftTeamLabel += "A"
                    rightTeamLabel += "H"
                } else {
                    leftTeamLabel += "H"
                    rightTeamLabel += "A"
                }
                //check to see if home or away won
                if (match.scores.away.total < match.scores.home.total) {
                    awayWon = false
                }

                if (awayWon) {
                    if (leftTeamLabel === "A") {
                        leftTeamLabel += "-W"
                        rightTeamLabel += "-L"
                    } else {
                        leftTeamLabel += "-L"
                        rightTeamLabel += "-W"
                        leftColor = red
                        rightColor = green
                    }
                } else {
                    if (leftTeamLabel === "H") {
                        leftTeamLabel += "-W"
                        rightTeamLabel += "-L"
                    } else {
                        leftTeamLabel += "-L"
                        rightTeamLabel += "-W"
                        leftColor = red
                        rightColor = green
                    }
                }
                const dateArray = match.date.split("T")
                const grabDate = dateArray[0]
                return (
                    <TableRow
                        key={match.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="center">{grabDate}</TableCell>
                        <TableCell align="center" sx={{backgroundColor: leftColor}}>{leftTeamLabel}</TableCell>
                        <TableCell align="center" sx={{backgroundColor: rightColor}}>{rightTeamLabel}</TableCell>
                    </TableRow>
                )
            } else {
                return null
            }
        })
    }

    return (
        <div style={{display: "flex", flexDirection: 'column', alignItems: "center"}}>
            <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                <h2 className="fiveMargin" style={{alignSelf: "center"}}>Season Matchup</h2>
                <CustomToolTip 
                    textTip={`
                                This shows the matchup results between the two teams during the current season.
                                "A" = away team. 
                                "H" = home team. 
                                "L" = lost and background color red.
                                "W" = win and background color green.
                            `}

                />
            </div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">{leftTeam.split(" ").pop()}</TableCell>
                            <TableCell align="center">{rightTeam.split(" ").pop()}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {renderMatches()}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default MatchupRecordDisplay