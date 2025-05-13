import axios from "axios";

const API_BASE_URL = "http://localhost:3000"; // آدرس اصلی API

export const signUp = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
  return response.data;
};
