import { createSlice } from '@reduxjs/toolkit'

export const asessmentSlice = createSlice({
  name: 'asessment',
  initialState: {
    value: 0,
    ar: []
  },

  reducers: {
    increment: (state) => {
      if(state.value < 5){
      state.value += 5
    }
    },
    decrement: (state) => {
      if(state.value > 0){
         state.value -= 5
       }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    array: (state, action) => {
     return {
        ...state,
        ar: [...state.ar, action.payload]
     }
    },
  },
})

export const { increment, decrement, incrementByAmount, array } = asessmentSlice.actions

export default asessmentSlice.reducer