import {combineReducers} from 'redux';
import customerReducer from './customer';
import weatherReducer from './weather';

export default combineReducers({
  customers: customerReducer,
  weather: weatherReducer
})
