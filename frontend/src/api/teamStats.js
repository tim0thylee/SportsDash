import axios from "axios"

export const team_assists = async () => {
    const response = await axios.get("http://localhost:5000/team_assists")
    return response.data
}

export const team_points= async () => {
    const response = await axios.get("http://localhost:5000/team_points")
    return response.data
}

export const team_rebounds= async () => {
    const response = await axios.get("http://localhost:5000/team_rebounds")
    return response.data
}

export const team_blocks= async () => {
    const response = await axios.get("http://localhost:5000/team_blocks")
    return response.data
}

export const team_steals= async () => {
    const response = await axios.get("http://localhost:5000/team_steals")
    return response.data
}

export const team_threes= async () => {
    const response = await axios.get("http://localhost:5000/team_threes")
    return response.data
}

export const team_turnovers= async () => {
    const response = await axios.get("http://localhost:5000/team_turnovers")
    return response.data
}