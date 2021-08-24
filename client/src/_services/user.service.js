import axios from 'axios';
import { API_URL } from '../config';


export const userService = {
  login,
  logout,
  register,
};

function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify({ email, password }),
    url: `${API_URL}/user/login`,
  };
  return axios(requestOptions)
  .then((user) => {
      localStorage.setItem('user', JSON.stringify(user.data));
      return user.data;
  })
  
  
}

function logout() {
  localStorage.removeItem('user');
}
function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify(user),
    url: `${API_URL}/user/register`,
  };
  return axios(requestOptions);
}


