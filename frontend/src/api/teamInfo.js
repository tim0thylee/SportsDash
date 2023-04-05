import axios from "axios"

// this call is to receive the team id and team logos for the api-basketball api.
// it will be used in a separate api called 
const teamInfo = async () => {
    const response = await axios.get(`https://api-basketball.p.rapidapi.com/teams`, {
        params: {league: '12', season: '2022-2023'},
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_BASKETBALL_KEY,
          'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        }
    })
    
    return response.data
}

export default teamInfo