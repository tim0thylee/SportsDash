import React, {useState} from 'react'
import PlayerInjuryTable from './PlayerInjuryTable'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const debug = true

const PlayerInjuryDisplay = ({team, injuries}) => {
    console.log(injuries)
    const showInjuries = () => {
        const curInjuredTeam = injuries.find(obj => {
            return obj.team_name === team
        })
        console.log(curInjuredTeam)

        if (curInjuredTeam) {
            const players = curInjuredTeam.players
            return <PlayerInjuryTable players={players}/>
        } else {
            return( 
                <div>
                    <h3>This team has not injuries.</h3>
                </div>
            )
        }
    }

    return (
        <div>
            <h2>{team} Player Injuries</h2>
            {showInjuries()}
        </div>
    )
}

export default PlayerInjuryDisplay