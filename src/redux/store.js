import { configureStore } from '@reduxjs/toolkit'
import asessmentReducer from './asessmentSlice'

export default configureStore({
  reducer: {
    asessment: asessmentReducer,  
  },
})