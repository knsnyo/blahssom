import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import user from 'src/app/(front-end)/__features/user/model'

const config = {
  key: 'blahssom',
  storage,
  whitelist: ['user'],
}

const _reducer = combineReducers({
  user,
})

const reducer = persistReducer(config, _reducer)

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      serializableCheck: false,
    })
    // middleware.push(logger)

    return middleware
  },
})

export const pStore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
