import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
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
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer