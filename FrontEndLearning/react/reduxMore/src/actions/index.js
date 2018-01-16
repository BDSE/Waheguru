import axios from 'axios';

const API_KEY = 'a75e9a2f8a7bde13813c01d4a0a369b2';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

const FETCH_WEATHER = 'FEATCH_WEATHER';

function fetchDataFromApi(city){
    const url = `${URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

export {FETCH_WEATHER};
export {fetchDataFromApi};