import axios from "axios";

const API_BASE_URL = "http://localhost:3000"; // آدرس اصلی API

export const signUp = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/auth/register`, data);
  return response.data;
};

export const login = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, data);
  return response.data;
};
