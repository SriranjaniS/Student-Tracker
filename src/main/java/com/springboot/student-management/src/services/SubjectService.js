// src/api/subjectApi.js
import axios from 'axios';

const API_URL = '/api/subjects';

export const getSubjects = () => axios.get(API_URL);
export const getSubject = (id) => axios.get(`${API_URL}/${id}`);
export const createSubject = (subject) => axios.post(API_URL, subject);
export const updateSubject = (id, subject) => axios.put(`${API_URL}/${id}`, subject);
export const deleteSubject = (id) => axios.delete(`${API_URL}/${id}`);
