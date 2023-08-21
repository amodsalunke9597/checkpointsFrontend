import axios from "axios";
//let baseURL = 'https://purple-carpenter-mxpjl.pwskills.app:4001';
let baseURL = 'https://mernbackend-18y9.onrender.com/';

console.log(baseURL);
export const axiosClient = axios.create({
    baseURL,
    //withCredentials: true,
});