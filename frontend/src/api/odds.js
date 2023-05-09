import axios from "axios"

const oddsApi = async () => {
    const response = await axios.get(`https://api.the-odds-api.com/v4/sports/basketball_nba/odds`, {
        params:{
            apiKey: process.env.REACT_APP_ODDS_KEY,
            regions: "us",
            markets: "h2h",
            oddsFormat: "american"
        }
    })
    
    return response.data
}

export default oddsApi