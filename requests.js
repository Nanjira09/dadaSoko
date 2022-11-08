import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

const fetchCategories = async () => {
  const response = await axios.get(`${BASE_URL}/categories`);
  return response.data;
};

const fetchProducts = async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
};

export { fetchCategories, fetchProducts };
