import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6050b01f5346090017670430.mockapi.io/api',
});

export default api;
