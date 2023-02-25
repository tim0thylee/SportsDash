import axios from "axios"

const oddsApi = async () => {
    const response = await axios.get(`https://api.the-odds-api.com/v4/sports/basketball_nba/odds`, {
        params:{
            apiKey: "a7823d50477999049e8d7584df30ec99",
            regions: "us",
            markets: "h2h",
            oddsFormat: "american"
        }
    })
    
    // console.log(response)
    return response.data
}

export default oddsApi