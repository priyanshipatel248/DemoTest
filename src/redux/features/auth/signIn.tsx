
import { createAsyncThunk } from "@reduxjs/toolkit";
import { performPostRequest } from "../../../api/axiosUtils";
import Urls from "../../../urls";



export const SignInWithPasswordAPI: any = createAsyncThunk(
  "password/SignAPI",
  async (params,{dispatch}) => {

    // eslint-disable-next-line no-useless-catch
    try {
      const response = await performPostRequest(Urls.LOGIN_WITH_PASSWORD, params);

      return response;
    } catch (error) {

      throw error;
    }
  }
);






