import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  number: 100,
};

const numberSlice = createSlice({
  name: "numberSlice",
  initialState,
  reducers: {
    //   nơi update logic thayy đổi state
    handleUpAction: (state) => {
      state.number = state.number + 1;
    },
    handleDownAction: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

export const { handleUpAction, handleDownAction } = numberSlice.actions; //action

export default numberSlice.reducer; // tên reducer
