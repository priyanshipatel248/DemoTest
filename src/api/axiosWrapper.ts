import axios from "axios";

import Urls from "../urls";

/**
 * Returns an instance of Axios with the specified token and headers for making HTTP requests.
 * @param {string} token - The authentication token to include in the request headers.
 * @returns An instance of Axios configured with the specified token and headers.
 */
export const getAxiosInstance = () => {

  
    return axios.create({
      baseURL: Urls.BASE_URL,
      timeout: 60000,
      headers: {
        "content-type": "application/json",
       
      },

    });
 
};

export const getAxiosInstancePatch = (token: string) => {
  if (token) {
    return axios.create({
      baseURL: Urls.BASE_URL,
      timeout: 60000,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: `Bearer${token}`,
    
      },
    });
  } else {
    return axios.create({
      baseURL: Urls.BASE_URL,
      timeout: 60000,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "accept-language": GooglePlaceAPIKey.language,
      },
    });
  }
};

export const getAxiosInstanceFileUpload = (token: string) => {
  if (token) {
    return axios.create({
      baseURL: Urls.BASE_URL,
      timeout: 60000,
      headers: {
        "content-type": "multipart/form-data",
        Authorization: token,
        "accept-language": GooglePlaceAPIKey.language,
      },
    });
  } else {
    return axios.create({
      baseURL: Urls.BASE_URL,
      timeout: 60000,
      headers: {
        "content-type": "multipart/form-data",
        "accept-language": GooglePlaceAPIKey.language,
      },
    });
  }
};
