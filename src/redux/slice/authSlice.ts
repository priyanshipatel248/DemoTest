import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLogin: boolean;

  userData: object;

}

const initialState: AuthState = {
  isLogin: false,

  userData: {},

};

const authSlice: any = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
   
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
   
  },
});

export const { setIsLogin, setUserData } = authSlice.actions;
export default authSlice.reducer;
