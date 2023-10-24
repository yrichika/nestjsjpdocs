// REF: https://dev.to/ajinkyax/testing-redux-toolkit-in-react-nextjs-application-1hfl
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import { render } from '@testing-library/react'

import { reducer } from '@/lib/redux/rootReducer'
import { ReduxState } from '@/lib/redux'

const testStore = (state: Partial<ReduxState>) => {
  return configureStore({
    reducer,
    preloadedState: state,
  })
}

export const renderWithStore = (component: any, initialState: any) => {
  const Wrapper = ({ children }: any) => (
    <Provider store={testStore(initialState)}>{children}</Provider>
  )
  return render(component, { wrapper: Wrapper })
}
