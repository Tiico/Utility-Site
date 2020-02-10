import axios from 'axios';

const WEATHER = '/api/weather'

class WeatherService {
    static weather(lat, lon){
        return axios.get(WEATHER, {
            params: {
            lat,
            lon
            }
        })
        .then(function (response) {
            return {
                ...response.data,
            }
        })
        .catch(function (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        })
    }
}
export default WeatherService;