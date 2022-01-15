import axios from "axios";
import { CityLocationResponse } from "../types"
const apiKey = "47b4b166bf68465eb7c4695bd5f4e6f5"

const api = axios.create({
    baseURL: "http://api.weatherbit.io/v2.0",
    method: "GET"
})

/**
 * @description Grabs the current weather based on given city and state
 * @param {string} city City as a string
 * @param {string} state State as a string
 * @returns {CityLocationResponse} Object containing the current weather da
 */
export const cityLocation = async (city: string, state: string): Promise<CityLocationResponse> => {
    const response = await api.get(`/current?key=${apiKey}&city=${city},${state}`)
    return response.data.data[0]
}

export const severeWeatherAlert = async (city: string, state: string): Promise<any> => {
    const response = await api.get(`/alerts?key=${apiKey}&city=${city},${state}`)
    return response.data
}

export const oneHourForecast = async (city: string, state: string): Promise<any> => {
    const response = await api.get(`/forecast/daily?key=${apiKey}&city=${city},${state}`)
    return response.data
}

