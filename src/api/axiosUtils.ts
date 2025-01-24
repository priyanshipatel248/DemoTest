import createAuthRefreshInterceptor from "axios-auth-refresh";
import _ from 'lodash';
import moment from "moment";
import { Globals } from "../utils/globals";

import {
  getAxiosInstance,
  getAxiosInstanceFileUpload,
  getAxiosInstancePatch,
} from "./axiosWrapper";
import { store } from "../redux/store";
import Urls from "../urls";
import axios from "axios";


import { useTranslation } from "react-i18next";


const getAccessToken = () => {
  const state = store.getState();

  const { authToken } = _.get(state, "authReducer", "");

  return authToken;
};


const getTokenTime = () => {
  const state = store.getState();
  const { tokenTime } = _.get(state, "authReducer", "");
  return tokenTime;
};

const refreshAuthLogic = async (failedRequest: any) => {
  const { t } = useTranslation();
  let token = getAccessToken();

  return await axios
    .post(
      Urls.REFRESH,
      {},
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((tokenRefreshResponse) => {
      let accessToken = tokenRefreshResponse.data.accessToken;
    

      failedRequest.response.config.headers["Authentication"] = accessToken;
      return Promise.resolve();
    })
    .catch((err) => {
      store.dispatch(setUserToken(""));
      // store.dispatch(AuthAction.set
      // (""));
      const message = "Session expired please login again";
      const toastData = {
        type: Toast.FAIL,
        message: message,
        title: t("ERROR"),
      };
      // store.dispatch()
      store.dispatch(showToast(toastData));
    });
};


export const performGetRequest = async (endPoint: any) => {
  let token = getAccessToken();

  let instance = getAxiosInstance(token);

  createAuthRefreshInterceptor(instance, refreshAuthLogic);

 

  try {
    const response = await instance.get(endPoint);
    return response.data;
  } catch (error: any) {
    // Handle errors, you can customize this based on your needs
    if (error?.response && error?.response?.data) {
      const backendErrorMessage = error?.response?.data?.message; // Adjust the property based on your backend response structure
      throw new Error(`${backendErrorMessage}`);
    } else {
      throw new Error(`Request failed: ${error.message}`);
    }
  }
};


export const performPostRequest = async (
  endPoint: string,
  data: any
): Promise<any> => {

  console.log("--Data",data)


  let instance = getAxiosInstance();



 

  try {
 
    const response = await instance.post(endPoint, data);

    return response.data;
  } catch (error: any) {
    console.log("--error",error)
    // Handle errors, you can customize this based on your needs
    if (error?.response && error?.response?.data) {
      const backendErrorMessage = error?.response?.data?.message; // Adjust the property based on your backend response structure
      throw new Error(`${backendErrorMessage}`);
    } else {
      console.log("--errorMSG",error)
      throw new Error(`Request failed: ${error.message}`);
    }
  }
};

export const performPutRequest = async (endPoint: any, data: any) => {
  let token = getAccessToken();
  const instance = getAxiosInstance(token);

  createAuthRefreshInterceptor(instance, refreshAuthLogic);

  return instance
    .put(endPoint, data)
    .then((response: { data: any }) => response.data)
    .catch((e: any) => {
      throw e;
    });
};

export const performPatchRequest = async (endPoint: any, data: any) => {
  let token = getAccessToken();
  const instance = getAxiosInstance(token);

  createAuthRefreshInterceptor(instance, refreshAuthLogic);

  return instance
    .patch(endPoint, data)
    .then((response: { data: any }) => response.data)
    .catch((e: any) => {
      throw e;
    });
};

export const performPatchRequestEncode = async (endPoint: any, data: any) => {
  let token = getAccessToken();
  const instance = getAxiosInstancePatch(token);
  let currentTime = moment().format("YYYY-MM-DD HH:mm:ss");
  let tokenExpirationTime = getTokenTime();

  createAuthRefreshInterceptor(instance, refreshAuthLogic);

  return instance
    .patch(endPoint, data)
    .then((response: { data: any }) => response.data)
    .catch((e: any) => {
      throw e;
    });
};

export const performDeleteRequest = async (endPoint: any, data: any) => {
  const token = Globals.kUserToken;
  const instance = getAxiosInstance(token);
  let currentTime = moment().format("YYYY-MM-DD HH:mm:ss");
  let tokenExpirationTime = getTokenTime();

  createAuthRefreshInterceptor(instance, refreshAuthLogic);

  return instance
    .delete(endPoint, data)
    .then((response: { data: any }) => response.data)
    .catch((e) => {
      throw e;
    });
};

export const performPostRequestWithFile = async (endPoint: any, data: any) => {
  let token = Globals.kUserToken;
  let instance = getAxiosInstanceFileUpload(token);
  let currentTime = moment().format("YYYY-MM-DD HH:mm:ss");
  let tokenExpirationTime = getTokenTime();

  createAuthRefreshInterceptor(instance, refreshAuthLogic);

  return instance
    .post(endPoint, data)
    .then((response: { data: any }) => response.data)
    .catch((e: any) => {
      throw e;
    });
};

export const performPutRequestWithFile = async (endPoint: any, data: any) => {
  const token = Globals.kUserToken;
  const instance = getAxiosInstanceFileUpload(token);
  let currentTime = moment().format("YYYY-MM-DD HH:mm:ss");
  let tokenExpirationTime = getTokenTime();

  createAuthRefreshInterceptor(instance, refreshAuthLogic);

  return instance
    .put(endPoint, data)
    .then((response: { data: any }) => response.data)
    .catch((e: any) => {
      throw e;
    });
};

export const performGetRequestGoogle = async (endPoint: any) => {
  const instance = getAxiosInstanceGoogle();

  return instance
    .get(endPoint)
    .then((response: any) => response.data)
    .catch((e: any) => {
      throw e;
    });
};
