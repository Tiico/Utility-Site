/* import store from '../store/store'
 */
import axios from 'axios';

let axiosInstance = axios.create({
  timeout: 10000
});

/**
 * Adds the authorization header before each request.
 */
/* axiosInstance.interceptors.request.use(config => {
  if (store.getState().authentication[0]) {
    let token = store.getState().authentication[0].token.token
    config.headers.authorization = token.type + ' ' + token.access_token;
  }
  return config;
  },
  error => Promise.reject(error)
); */

  

export default axiosInstance;