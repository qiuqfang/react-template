import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const overviewSlice = createSlice({
  name: "overview",
  initialState,
  reducers: {
    increment(state, action) {
      console.log(action);
      state.count += Math.random() * 100 * action.payload;
    },
  },
});

export const { increment } = overviewSlice.actions;

export const incrementAsync = (amount) => async (dispatch, getState) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  dispatch(increment(amount));
  return getState();
};

export default overviewSlice.reducer;
