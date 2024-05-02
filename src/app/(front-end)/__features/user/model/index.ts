/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from 'src/@types/user'

export interface IReduxUser {
  user?: {
    id: string
    nickname?: string
  }
}

const user = createSlice({
  name: 'user',
  initialState: {} as IReduxUser,
  reducers: {
    signIn: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    },
    signOut: (state) => {
      state.user = undefined
    },
    updateNickname: (state, action) => {
      if (state?.user) return
      state.user!.nickname = action.payload
    },
  },
})

export default user.reducer

export const Action = user.actions
