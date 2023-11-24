/* Instruments */
import { combineReducers } from '@reduxjs/toolkit'
import { aboutThisSiteInfoSlice } from './slices'

export const reducer = combineReducers({
  aboutThisSiteInfo: aboutThisSiteInfoSlice.reducer,
})
