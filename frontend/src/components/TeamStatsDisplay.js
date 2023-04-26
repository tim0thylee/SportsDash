import React from 'react'
import TeamStatsTable from './TeamStatsTable'
import CustomToolTip from './CustomToolTip'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const TeamStatsDisplay = ({title, team, assists, points, rebounds, blocks, steals, turnovers, threes, textTip}) => {

    return (
        <div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <h2>{title}</h2>
                <CustomToolTip textTip={textTip}/>
            </div>
            <TeamStatsTable 
                allStats={[
                    points[team], 
                    assists[team],
                    rebounds[team],
                    blocks[team],
                    steals[team],
                    threes[team],
                    turnovers[team],
                ]}
            />
        </div>
    )
}

export default TeamStatsDisplay