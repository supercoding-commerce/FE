import axios from 'axios';

export const fetchProducts = async (pageNumber: number) => {
  const response = await axios.get(
    `https://pet-commerce.shop/v1/api/product?pageNumber=${pageNumber}`,
  );
  return response.data;
};
