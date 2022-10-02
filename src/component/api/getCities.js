import axios from "axios";
import {API_VERSION} from "../constant/api";

/**
 * API method to fetch city info. Data is paginated
 *
 * @param page -
 * @returns {Promise<AxiosResponse<any>>}
 */
export const getCities = async (page = 0) =>{
    const url = API_VERSION + '/city?page=' + page;
    try {
        return await axios.get(url);
    } catch (error) {
        console.error(error.message);
    }
}