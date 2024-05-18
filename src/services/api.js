import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getUsers = () => axios.get(`${API_URL}/users/`);
export const getProperties = () => axios.get(`${API_URL}/properties/`);
export const createProperty = (property) => axios.post(`${API_URL}/properties/`, property);
