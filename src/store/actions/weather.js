import {GET_WEATHER} from './constants';

export const getWeather = () => dispatch => {
  return fetch('api/weather')
    .then(res => res.json())
    .then(weather => dispatch({type: GET_WEATHER, payload: weather}))
}
