import axios from 'axios';
import auth from '../helpers/auth';

const axiosWithAuth = () => {
  const authToken = auth.get();
  return axios.create({
    headers: {
      Authorization: authToken,
    }
  });
};

export default axiosWithAuth;
