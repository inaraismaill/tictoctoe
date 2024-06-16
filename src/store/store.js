import { configureStore } from '@reduxjs/toolkit'
import gameReducer from "./features/gameslice"


export const store = configureStore({
  reducer: gameReducer
})