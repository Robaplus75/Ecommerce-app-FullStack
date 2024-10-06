import axios from 'axios'

export const api_auth = axios.create({
  baseURL: 'http://localhost:8000',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

api_auth.interceptors.request.use(function (config) {
	console.log("Api_auth Request sent")
  return config;
}, function (error) {
    // Do something with request error
  return Promise.reject(error);
});



export const api = axios.create({
  baseURL: 'http://localhost:8000',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

api.interceptors.request.use(function (config) {
	console.log("Api Request sent")
  return config;
}, function (error) {
    // Do something with request error
  return Promise.reject(error);
});
