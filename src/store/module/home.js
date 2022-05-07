import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    increment(state, action) {
      state.count += Math.random() * 100 * action.payload;
    },
  },
});

console.log("homeSlice", homeSlice);

export const { increment } = homeSlice.actions;

export const incrementAsync = (amount) => async (dispatch) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  dispatch(increment(amount));
  return 2222;
};

export default homeSlice.reducer;
