/* Core */
import { createSlice } from '@reduxjs/toolkit'

type DisplayState = 'block' | 'none'

export interface AboutThisSiteInfoSliceState {
  display: DisplayState
}

const initialState: AboutThisSiteInfoSliceState = {
  display: 'block',
}

export const aboutThisSiteInfoSlice = createSlice({
  name: 'aboutThisSiteInfo',
  initialState,
  reducers: {
    toggleDisplay: state => {
      state.display = state.display === 'block' ? 'none' : 'block'
    },
  },
})

export const { toggleDisplay } = aboutThisSiteInfoSlice.actions
