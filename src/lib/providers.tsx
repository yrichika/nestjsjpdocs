'use client'

/* Core */
import { Provider } from 'react-redux'

/* Instruments */
import { persistor, reduxStore, rootId } from '@/lib/redux'
import { PersistGate } from 'redux-persist/integration/react'

export const Providers = (props: React.PropsWithChildren) => {
  // redux-persist用: これがないとエラーになる
  document.getElementById(rootId) // FIXME: ビルドでエラーが出る

  return (
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  )
}
