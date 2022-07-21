import { createSlice } from '@reduxjs/toolkit'

export const asessmentSlice = createSlice({
  name: 'asessment',
  initialState: [],

  reducers: {
    array(state, action) { 
      state.push(action.payload )
    },
  },
})

export const { increment, decrement, array } = asessmentSlice.actions

export default asessmentSlice.reducer