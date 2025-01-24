import { createSlice } from "@reduxjs/toolkit";

interface CaseState {
  eventData: Array;
 
}

const initialState: CaseState = {
  eventData: [],

};

const eventSlice: any = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEventData: (state, action) => {
      state.eventData = action.payload;
    },
   
  },
});

export const {  setEventData, setIndividualCaseData } = eventSlice.actions;
export default eventSlice.reducer;
