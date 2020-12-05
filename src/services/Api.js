import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/weather',
})

export default api;