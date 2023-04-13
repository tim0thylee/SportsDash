import axios from "axios"
import {currentSeason} from './constants'

// this call is to receive the team id and team logos for the api-basketball api.
// it will be used in a separate api called 
const pastGames = async (team) => {
    const response = await axios.get(`https://api-basketball.p.rapidapi.com/games`, {
        params: {
          league: '12', 
          season: currentSeason, 
          team},
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_BASKETBALL_KEY,
          'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        }
    })
    
    return response.data
}

export default pastGames