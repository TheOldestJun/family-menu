import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  shopList: [
    { id: 1, title: "Potatoes", checked: false },
    { id: 2, title: "Tomatoes", checked: false },
  ],
};

const shopListSlice = createSlice({
  name: "shopList",
  initialState,
  reducers: {
    add(state, action) {
      state.shopList = [action.payload, ...state.shopList];
    },
    setChecked(state, action) {
      state.shopList[action.payload.index].checked = action.payload.checked;
    },
    remove(state, action) {
      state.shopList = state.shopList.filter((item) => item !== action.payload);
    },
    clear(state) {
      state.shopList = [];
    },
  },
});

export const { add, setChecked, remove, clear } = shopListSlice.actions;
export default shopListSlice.reducer;
