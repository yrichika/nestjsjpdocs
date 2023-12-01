/* Core */
import { configureStore, type Action, type ThunkAction } from '@reduxjs/toolkit'
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  type TypedUseSelectorHook,
} from 'react-redux'

/* Instruments */
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist'
import session from 'redux-persist/lib/storage/session'
import { reducer } from './rootReducer'

export const rootId = 'root'

const persistConfig = {
  key: rootId,
  storage: session,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const reduxStore = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // redux-persistでエラーが出ないようにするため
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(reduxStore)
export const useDispatch = () => useReduxDispatch<ReduxDispatch>()
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector

/* Types */
export type ReduxStore = typeof reduxStore
export type ReduxState = ReturnType<typeof reduxStore.getState>
export type ReduxDispatch = typeof reduxStore.dispatch
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>
