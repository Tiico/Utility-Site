  
import axios from 'axios';

const USER = 'api/user';
const AUTH = 'api/auth'

class AuthService {
    /**
     * Registers a user
     * @param {*} user the user to be registered
     */
    static registerUser(username, firstname, lastname, email, password) {
        // eslint-disable-next-line no-console
        console.log("In AuthService: " + username)
        return axios.post(USER, {
            username,
            firstname,
            lastname,
            email,
            password
        })
    }
    /**
     * authenticates a user
     * @param {*} user the user credentials to authenticate
     */
    static loginUser(username, password) {
        return axios.post(AUTH, {
            username,
            password})
        .then(response => {
            return {
                ...response.data,
            }
        })
        // .catch(err => err);
    }

}

export default AuthService;