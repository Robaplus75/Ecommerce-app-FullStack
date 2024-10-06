import axios from 'axios'

export const api_auth = axios.create({
  baseURL: 'http://localhost:8000',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

api_auth.interceptors.request.use(
  async (config) => {
    console.log("Api_auth Request sent");

    const authTokens = JSON.parse(localStorage.getItem('auth_tokens'));

    if (isAccessTokenExpired(authTokens.access)) {
      console.log("Refresh token process started")
      // Refresh the access token
      const refreshToken = authTokens.refresh;
      const response = await api.post('/accounts/token/refresh/', {
        refresh: refreshToken,
      });

      // Update the auth tokens in localStorage
      const newAuthTokens = {
        access: response.data.access,
        refresh: response.data.refresh,
      };
      localStorage.setItem('auth_tokens', JSON.stringify(newAuthTokens));

      // Update the config with the new access token
      config.headers.Authorization = `Bearer ${newAuthTokens.access}`;
    } else {
      console.log("Using Current Token")
      // Use the existing access token
      config.headers.Authorization = `Bearer ${authTokens.access}`;
    }

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Helper function to check if the access token is expired
function isAccessTokenExpired(accessToken) {
  // Implement your token expiration check logic here
  // For example, you can check the token's expiration time
  const expirationTime = JSON.parse(atob(accessToken.split('.')[1])).exp;
  return expirationTime < Date.now() / 1000;
}



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
