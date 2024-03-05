
import axios from 'axios';

export const uploadImage = async ({ description, imageName, category, source }) => {
  const response = await axios.post('http://localhost:3002/images', { description, imageName, category, source });
  return response.data;
};

export const getImagesByCategory = async (category) => {
  const response = await axios.get(`http://localhost:3002/images?category=${category}`);
  return response.data;
};
