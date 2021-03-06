import axios from 'axios';
const baseUrl = 'http://127.0.0.1:5000/api';

export const loginService = (payload) => {
  return axios.post(`${baseUrl}/client_login`, payload)
}

export const registerService = (payload) => {
  return axios.post(`${baseUrl}/client`, payload)
}