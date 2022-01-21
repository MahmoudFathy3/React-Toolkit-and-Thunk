import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {isLogin: false, name: "Mahmoud Fathy"},
  reducers: {
    ToggleLogin: (state) =>{
      state.isLogin = !state.isLogin;
    }
  }
})

export const { ToggleLogin } = AuthSlice.actions;
export default AuthSlice.reducer;