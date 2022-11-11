import { createSlice } from "@reduxjs/toolkit";

export const asessmentSlice = createSlice({
  name: "asessment",
  initialState: {
    count: 0,
    selected_options: [],
    signup_data: []
  },

  reducers: {

    array: (state, action) => {
      state.selected_options[action.payload[1]] = action.payload[0];
    },

    increment: (state) => {
        state.count += 5;
    },

    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 5;
      }
    },
  },
});

export const { increment, decrement, array, signup_data } = asessmentSlice.actions;

export default asessmentSlice.reducer;
