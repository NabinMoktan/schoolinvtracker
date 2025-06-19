// src/api/schoolApi.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // or your Django API base
});

export const getSchools = () => API.get('schools/');
export const getSchool = (id) => API.get(`schools/${id}/`);
// export const addSchool = (schoolData) => axios.post(`${API_URL}/schools/`, schoolData);
export const addSchool = (data) => API.post('schools/', data);
export const updateSchool = (id, data) => API.put(`schools/${id}/`, data);
export const deleteSchool = (id) => API.delete(`schools/${id}/`);

export default API;
