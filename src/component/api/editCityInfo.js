import axios from "axios";
import {API_URL_DEV, API_VERSION} from "../constant/api";


export const fetchData = async () =>{
    const url = API_URL_DEV + API_VERSION + ''
    try {
        const {data: response} = await axios.get('/stuff/to/fetch');
    } catch (error) {
        console.error(error.message);
    }
}