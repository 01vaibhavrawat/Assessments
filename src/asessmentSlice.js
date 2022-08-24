import { createSlice } from '@reduxjs/toolkit'

export const asessmentSlice = createSlice({
  name: 'asessment',
  initialState: {
    count: 0,
    selected_options: []
  },

  reducers: {
    array: (state, action) => { 
      state.selected_options[action.payload[1]] = (action.payload[0])
    },

    increment: (state) => {
      if(state.count < 5){
      state.count += 5
      }
    },

    decrement: (state) => {
      if(state.count > 0){
         state.count -= 5
      }
    },
},
})

export const { increment, decrement, array } = asessmentSlice.actions

export default asessmentSlice.reducer