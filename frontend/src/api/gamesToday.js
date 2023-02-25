import axios from "axios"

const gamesToday = async () => {
    const response = await axios.get("https://tank01-fantasy-stats.p.rapidapi.com/getNBAGamesForDate", {
        params: {gameDate: '20230209'},
        headers: {
          'X-RapidAPI-Key': '8c9aae083emshf71c6b63346abbfp19ef88jsn4f0b9c0fba72',
          'X-RapidAPI-Host': 'tank01-fantasy-stats.p.rapidapi.com'
        }
    })
    console.log(response)
}

export default gamesToday