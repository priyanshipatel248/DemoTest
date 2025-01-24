import {createAsyncThunk} from '@reduxjs/toolkit';
import { performPostRequest} from '../../../api/axiosUtils';
import Urls from '../../../urls';


export const getEventListAPI: any = createAsyncThunk(
  'eventList/eventListAPI',
  async (params: any, {dispatch}) => {
    try {
      const response = await performPostRequest(Urls.EVENT_LISTING, '');

      console.log('--response', response);
      return response;
    } catch (error) {
      throw error;
    }
  },
);





