import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinderclone124.herokuapp.com/'
})

export default instance;