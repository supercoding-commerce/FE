import axios from 'axios';

export const fetchCategoryProducts = async (
  category: string | null,
  pageRef: number,
  age: string | null,
  gender: string | null,
  filter: string | null,
) => {
  let url = `https://pet-commerce.shop/v1/api/product/category/${category}?pageNumber=${pageRef}`;

  if (age !== null && age !== undefined) {
    url += `&ageCategory=${age}`;
  }

  if (gender !== null && gender !== undefined) {
    url += `&genderCategory=${gender}`;
  }

  if (filter !== null && filter !== undefined) {
    if (filter === '저가순') {
      url += `&sortBy=price`;
    } else if (filter === '최신순') {
      url += `&sortBy=createdAt`;
    }
  }

  const response = await axios.get(url);
  return response.data;
};
