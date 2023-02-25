import {useState, useEffect} from 'react'
import oddsApi from '../api/odds'

const OddsDiplay = ({rightTeam, leftTeam}) => {
    const [playsToday, setPlaysToday] = useState({})
    const [odds, setOdds] = useState([])

    useEffect(() => {
        const callData= async () => {
            const oddsData = await oddsApi()

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
        if (rightTeam in playsToday && leftTeam in playsToday) {
            console.log(true)
        } else {
            console.log(false)
        }
    }

    showOdds()
    return (
        <div>
            Odds
            
        </div>
    )
}

export default OddsDiplay