/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from 'src/@types/user'

export interface IReduxUser {
  user?: IUser | null
}

const user = createSlice({
  name: 'user',
  initialState: { user: null } as IReduxUser,
  reducers: {
    signIn: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    },
    signOut: (state) => {
      state.user = null
    },
    updateNickname: (state, action) => {
      if (state?.user) return
      state.user!.nickname = action.payload
    },
  },
})

export default user.reducer

export const Action = user.actions
