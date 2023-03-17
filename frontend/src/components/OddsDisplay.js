import {useState, useEffect} from 'react'
import OddsTable from './OddsTable'
import oddsApi from '../api/odds'

const debug = true

const SAMPLE_DATA = [
    {
        away_team: "Detroit Pistons",
        home_team: "Charlotte Hornets",
        id: "07d93249af6903a9e4bbfd5b13c76476",
        bookmakers: [
            {
                key: 'draftkings', 
                title: 'DraftKings', 
                last_update: '2023-02-27T08:14:06Z', 
                markets: [
                    {
                        key: 'h2h', 
                        last_update: '2023-02-27T08:14:06Z', 
                        outcomes: [
                            {
                                name: 'Charlotte Hornets',
                                price: -260},
                            {
                                name: 'Detroit Pistons', 
                                price: 220}
                        ]
                    }
                ]
            },
            {
                key: 'williamhill_us', 
                title: 'William Hill (US)', 
                last_update: '2023-02-27T08:14:06Z', 
                markets: [
                    {
                        key: 'h2h', 
                        last_update: '2023-02-27T08:14:06Z', 
                        outcomes: [
                            {
                                name: 'Charlotte Hornets',
                                price: -260
                            },
                            {
                                name: 'Detroit Pistons', 
                                price: 220
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        away_team: "Philadelphia 76ers",
        home_team: "Miami Heat",
        id: "3479b09a4f714c6af3801e4393a7a84e",
        bookmakers: [
            {
                key: 'draftkings', 
                title: 'DraftKings', 
                last_update: '2023-02-27T08:14:06Z', 
                markets: [
                    {
                        key: 'h2h', 
                        last_update: '2023-02-27T08:14:06Z', 
                        outcomes: [
                            {
                                name: 'Philadelphia 76ers',
                                price: -260},
                            {
                                name: 'Miami Heat', 
                                price: 220}
                        ]
                    }
                ]
            },
            {
                key: 'williamhill_us', 
                title: 'William Hill (US)', 
                last_update: '2023-02-27T08:14:06Z', 
                markets: [
                    {
                        key: 'h2h', 
                        last_update: '2023-02-27T08:14:06Z', 
                        outcomes: [
                            {
                                name: 'Philadelphia 76ers',
                                price: -260
                            },
                            {
                                name: 'Miami Heat', 
                                price: 220
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

const OddsDiplay = ({rightTeam, leftTeam}) => {
    const [playsToday, setPlaysToday] = useState({})
    const [odds, setOdds] = useState([])

    useEffect(() => {
        // Call the data and store in odds. 
        const callData= async () => {
            const oddsData = debug ? SAMPLE_DATA : await oddsApi()

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
                    return <div>These 2 teams are not playing each other</div>
                }
            } else {
                return <div>One or more of these teams are not playing today.</div>
            }
        } else {
            return <div>These two teams are the same</div>
        }
    }

    return (
        <div>
            {showOdds()}
        </div>
    )
}

export default OddsDiplay