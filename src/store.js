import { configureStore } from '@reduxjs/toolkit'
import conunterReducer from './counterSlice'

export default configureStore({
  reducer: {
    conunter: conunterReducer,
  },
})