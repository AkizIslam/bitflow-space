// src/api.js
import axios from 'axios';

const API_BASE = 'https://bitflow-backend-0gzu.onrender.com/api';

const api = axios.create({
  baseURL: API_BASE,
});

// Add JWT token to every request if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export const login = (data) => api.post('/auth/login', data);
export const register = (data) => api.post('/auth/register', data);
export const getProfile = () => api.get('/user/profile');
export const deposit = (data) => api.post('/user/deposit', data);
export const withdraw = (data) => api.post('/user/withdraw', data);
export const getCrypto = () => api.get('/user/crypto');
export const approveDeposit = (id) => api.post('/admin/approve', { id });
export const rejectDeposit = (id) => api.post('/admin/reject', { id });
export const approveWithdraw = (id) => api.post('/admin/approve-withdraw', { id });
export const getAllStats = () => api.get('/admin/all-stats');
export const getStats = () => api.get('/stats');

export default api;