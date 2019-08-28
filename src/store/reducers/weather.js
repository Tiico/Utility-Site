import {GET_WEATHER} from '../actions/constants'

const customerReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_WEATHER:
        return payload
      default:
        return state
    }
}

export default customerReducer;
