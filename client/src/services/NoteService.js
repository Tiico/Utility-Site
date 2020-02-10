import axios from 'axios';

const NOTE = '/api/note'

class NoteService {
    /**
     * Registers a user
     * @param {*} user the user to be registered
     */
    static storeNote(note, username) {
        return axios.post(NOTE, {
            note,
            username
        })
    }
    static retrieveNote(username) {
        return axios.get(NOTE, {
            params: {
                username
            }
        })
    }
}

export default NoteService;