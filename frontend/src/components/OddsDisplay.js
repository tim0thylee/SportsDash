import {useState, useEffect} from 'react'
import { ODDS_SAMPLE_DATA } from '../api/SampleData'
import OddsTable from './OddsTable'
import oddsApi from '../api/odds'

const debug = true

const OddsDiplay = ({rightTeam, leftTeam}) => {
    const [playsToday, setPlaysToday] = useState({})
    const [odds, setOdds] = useState([])

    useEffect(() => {
        // Call the data and store in odds. 
        const callData= async () => {
            const oddsData = debug ? ODDS_SAMPLE_DATA : await oddsApi()

            setOdds(oddsData)
            const temp = {}
            for (let i = 0; i < oddsData.length; i++){
                const awayTeam = oddsData[i].away_team
                const homeTeam = oddsData[i].home_team
                temp[awayTeam] = i
                temp[homeTeam] = i
            }
            setPlaysToday(temp)
        }
        
        callData().catch(console.error)
    }, [])
    console.log(odds)
    const showOdds = () => {
        // if the selected teams are playing, show the odds. 
        if (rightTeam != leftTeam){
            if (rightTeam in playsToday && leftTeam in playsToday) {
                const oddsIndex = playsToday[rightTeam]
                if (oddsIndex === playsToday[leftTeam]) {
                    return <OddsTable 
                                leftTeam={leftTeam} 
                                rightTeam={rightTeam} 
                                odds={odds[oddsIndex]}
                            />
                } else {
                    return <h3>There are no upcoming matchups for these two teams.</h3>
                }
            } else {
                return <h3>One or more of these teams are not playing today.</h3>
            }
        } else {
            return <h3>These two teams are the same.</h3>
        }
    }

    return (
        <div style={{display: "flex", flexDirection: 'column', alignItems: "center"}}>
            <h2 className="fiveMargin">Current Odds</h2>
            {showOdds()}
        </div>
    )
}

export default OddsDiplay