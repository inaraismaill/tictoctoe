import { configureStore } from '@reduxjs/toolkit'
import gameReducer from "./features/gameslice"
export default configureStore({
  reducer: gameReducer
})