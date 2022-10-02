import axios from "axios";
import {API_VERSION} from "../constant/api";

/**
 * API method to search city by name. Passed name must be string
 * @param cityName
 * @returns {Promise<AxiosResponse<any>>}
 */
export const getCityByName = async (cityName ) =>{
    const url = API_VERSION + '/city/search?name=' + cityName;
    try {
        return await axios.get(url);
    } catch (error) {
        console.error(error.message);
    }
}