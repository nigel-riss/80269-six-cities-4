import axios from 'axios';


const REQUEST_TIMEOUT = 5000;
const REQUEST_URL = `https://4.react.pages.academy/six-cities`;
const Error = {
  UNAUTHORIZED: 401,
};


const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: REQUEST_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onFulfilled = (response) => {
    return response;
  };

  const onRejected = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onFulfilled, onRejected);

  return api;
};


export {createAPI};
