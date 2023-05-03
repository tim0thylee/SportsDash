import React, {useState, useEffect} from 'react'
import headtohead from '../api/headtohead'

const MatchupRecordDisplay = ({leftTeam, rightTeam, teamInfo}) => {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        const callHeadToHeadData = async () => {
            const getHeadData = await headtohead(teamInfo[leftTeam].id, teamInfo[rightTeam].id)
            setMatches(getHeadData.response)
        }
        callHeadToHeadData()
    }, [leftTeam, rightTeam])
    console.log(matches)
    return (
        <div style={{display: "flex", flexDirection: 'column', alignItems: "center"}}>
            <h2 className="fiveMargin">Season Results</h2>
        </div>
    )
}

export default MatchupRecordDisplay