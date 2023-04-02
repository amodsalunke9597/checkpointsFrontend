import axios from "axios";
// let baseURL = 'http://localhost:4000';
let baseURL = 'https://mernbackend-18y9.onrender.com/';

console.log(baseURL);
export const axiosClient = axios.create({
    baseURL,
    withCredentials: true,
});