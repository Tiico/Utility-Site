
import { combineReducers } from 'redux';
import authentication from './authReducer';

/**
 * Combines the reducer into one rootreducer
 */
export default combineReducers({
    authentication: authentication,
});