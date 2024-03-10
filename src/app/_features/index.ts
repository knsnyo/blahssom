/**
 * https://redux-toolkit.js.org/
 */

import { useDispatch, useSelector, useStore } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'
import auth from 'src/app/_features/auth'
import user from 'src/app/_features/user'

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth,
      user,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore: () => AppStore = useStore
