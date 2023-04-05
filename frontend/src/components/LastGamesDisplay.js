import React, {useEffect, useState} from 'react';
import pastGames from '../api/pastGames'


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
                console.log("status", fullGames[i].status.long)
                if (fullGames[i].status.long !== "Not Started") {
                    tenArray.push(fullGames[i])
                }
            }

            setLastTenGames(tenArray)
        }
        getTenGames()
    }, [allTeamInfo])
    console.log("last", lastTenGames)
    return (
        <div>
            team states TAble
        </div>
    );
  }
  
  export default TeamStatsTable