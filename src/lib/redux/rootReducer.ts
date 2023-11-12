/* Instruments */
import { combineReducers } from '@reduxjs/toolkit'
import { aboutThisSiteInfoSlice, counterSlice } from './slices'

export const reducer = combineReducers({
  counter: counterSlice.reducer,
  aboutThisSiteInfo: aboutThisSiteInfoSlice.reducer,
})
