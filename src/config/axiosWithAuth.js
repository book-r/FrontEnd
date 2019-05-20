import axios from 'axios';

const axiosWithAuth = () => {
  const authToken = localStorage.getItem('authToken');
  return axios.create({
    headers: {
      Authorization: authToken,
    }
  });
};

export default axiosWithAuth;
