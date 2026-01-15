import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:3000/",
})

// change localhost -> http://192.168.0.10*:3000/ for mobile view IP according to your pc

export default instance;