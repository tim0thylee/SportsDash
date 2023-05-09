import axios from "axios"
import {currentSeason} from './constants'

const gamesToday = async (today) => {
    const response = await axios.get("https://api-basketball.p.rapidapi.com/games", {
        params: {
          date: today, 
          league: '12', 
          season: currentSeason, 
          timezone: "America/Los_Angeles"
        },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_BASKETBALL_KEY,
          'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        }
    })

    return response.data
}

export default gamesToday