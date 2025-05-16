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

export const getAllProducts = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_BASE_URL}/products`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteProduct = async (id) => {
  const token = localStorage.getItem("token");

  const response = await axios.delete(`${API_BASE_URL}/products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const addProduct = async (data) => {
  const token = localStorage.getItem("token");

  const response = await axios.post(`${API_BASE_URL}/products`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const editProduct = async (id, data) => {
  const token = localStorage.getItem("token");

  const response = await axios.put(`${API_BASE_URL}/products/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
