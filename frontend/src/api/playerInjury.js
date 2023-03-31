import axios from "axios"

const playerInjury = async () => {
    const response = await axios.get("http://localhost:5000/player_injuries")
    // console.log("player injury", response)
    return response.data
}

export default playerInjury