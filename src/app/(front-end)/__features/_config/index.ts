import { configureStore } from '@reduxjs/toolkit'

import user from 'src/app/(front-end)/__features/user/model'

export const store = configureStore({
  reducer: { user },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
