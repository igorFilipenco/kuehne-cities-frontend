import axios from "axios";
import {API_VERSION} from "../constant/api";

/**
 * API method to update city info. Receives fully updated object for PUT request
 * @param updatedCity
 * @returns {Promise<AxiosResponse<any>>}
 */
export const editCityInfo = async (updatedCity) =>{
    const url = API_VERSION + '/city/update';

    try {
        return await axios.put(url, updatedCity);
    } catch (error) {
        console.error(error.message);
    }
}