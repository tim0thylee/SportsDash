import axios from "axios"

export const opp_assists = async () => {
    const response = await axios.get("http://localhost:5000/opp_assists")
    return response.data
}

export const opp_points= async () => {
    const response = await axios.get("http://localhost:5000/opp_points")
    return response.data
}

export const opp_rebounds= async () => {
    const response = await axios.get("http://localhost:5000/opp_rebounds")
    return response.data
}

export const opp_blocks= async () => {
    const response = await axios.get("http://localhost:5000/opp_blocks")
    return response.data
}

export const opp_steals= async () => {
    const response = await axios.get("http://localhost:5000/opp_steals")
    return response.data
}

export const opp_threes= async () => {
    const response = await axios.get("http://localhost:5000/opp_threes")
    return response.data
}

export const opp_turnovers= async () => {
    const response = await axios.get("http://localhost:5000/opp_turnovers")
    return response.data
}