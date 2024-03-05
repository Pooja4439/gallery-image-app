
import axios from 'axios';

export const loginUser = async ({ email, password }) => {
  const response = await axios.post('http://localhost:3002/login', { email, password });
  return response.data;
};

export const signupUser = async ({ name, email, password }) => {
  const response = await axios.post('http://localhost:3002/signup', { name, email, password });
  return response.data;
};
