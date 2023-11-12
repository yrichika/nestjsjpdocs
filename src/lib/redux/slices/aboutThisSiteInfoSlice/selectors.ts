import type { ReduxState } from '@/lib/redux'

export const selectDisplay = (state: ReduxState) =>
  state.aboutThisSiteInfo.display
