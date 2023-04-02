import React from 'react'
import TeamStatsTable from './TeamStatsTable'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const TeamStatsDisplay = ({title, team, assists, points, rebounds, blocks, steals, turnovers, threes}) => {

    return (
        <div>
            <h2>{title}</h2>
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