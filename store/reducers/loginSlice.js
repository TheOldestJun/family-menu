import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  login: false,
  name: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.login = true;
      state.name = action.payload;
    },
    setLogout: (state) => {
      state.login = false;
      state.name = "";
    },
  },
});

export const { setLogin, setLogout } = loginSlice.actions;
export default loginSlice.reducer;
