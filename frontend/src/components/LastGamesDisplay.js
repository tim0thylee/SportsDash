import React, {useEffect, useState} from 'react';
import pastGames from '../api/pastGames'
import CustomToolTip from './CustomToolTip'

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';


const TeamStatsTable = ({team, allTeamInfo}) => {
    const [lastTenGames, setLastTenGames] = useState([])

    useEffect(() => {
        const getTenGames = async () => {
            const teamId = allTeamInfo[team].id
            const data = await pastGames(teamId)
            const fullGames = data.response
            const tenArray = []
            for (let i = fullGames.length -1 ; i >= 0; i--) {
                if (tenArray.length === 10){
                    break
                }
                if (fullGames[i].status.long !== "Not Started") {
                    tenArray.push(fullGames[i])
                }
            }

            setLastTenGames(tenArray)
        }
        getTenGames()
    }, [allTeamInfo, team])

    const renderGames = () => {
        const checkResult = (curTeam, awayTeam, game) => {
            let isAway = false
            const awayScore = game.scores.away.total
            const homeScore = game.scores.home.total
            if (curTeam === awayTeam) {
                isAway = true
            }
            if (isAway && (awayScore > homeScore)) {
                return <div style={{color:"#50C878"}}>W</div>
            } else if (!isAway && (homeScore > awayScore)) {
                return <div style={{color:"#50C878"}}>W</div>
            } else {
                return <div style={{color:"#C70039"}}>L</div>
            }
        }

        return lastTenGames.map((game) => {
            const awayTeam = game.teams.away.name
            const homeTeam = game.teams.home.name
            return (
                <div style={{padding: '10px', display: 'flex', flexDirection: 'column', alignItems: "center"}}>
                    <img src={game.teams.away.logo} style={{width:"30px", height:"20px"}} alt={awayTeam}/>
                    {checkResult(team, awayTeam, game)}
                    <img src={game.teams.home.logo} style={{width:"30px", height:"20px"}} alt={homeTeam}/>
                </div>
            )
        })
    }
    return (
        <div style={{marginBottom: '30px'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <h2>Last 10 Games Results</h2>
                <CustomToolTip textTip={`These are the Win/Loss of the most recent 10 games played by the ${team}.`}/>
            </div>
            <Box
                sx={{
                display: 'flex',
                justifyContent:'space-between',
                overflowX: 'auto',
                alignItems: 'center',
                width: '100%',
                border: (theme) => `1px solid ${theme.palette.divider}`,
                borderRadius: 1,
                bgcolor: 'background.paper',
                color: 'text.secondary',
                '& svg': {
                    m: 1.5,
                },
                '& hr': {
                    mx: 0.5,
                },
                }}
            >
                <div style={{padding: '10px', display: 'flex', flexDirection: 'column'}}>
                    <div> Away </div>
                    <div> Result</div>
                    <div> Home </div>
                </div>
                <Divider orientation="vertical" variant="middle" flexItem />
                {renderGames()}
            </Box>
        </div>
    );
  }
  
  export default TeamStatsTable