const RECORD = 'authToken';

export const getAuth = () => {
  return localStorage.getItem(RECORD);
}

const addAuth = (payload) => {
  localStorage.setItem(RECORD, payload);
}

const removeAuth = () => {
  localStorage.removeItem(RECORD);
}

const auth = {
  get: getAuth,
  add: addAuth,
  remove: removeAuth,
};

export default auth;
