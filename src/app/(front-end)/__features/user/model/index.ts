/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { IUser } from 'src/@types/user'

interface IReduxUser {
  user?: IUser
}

const user = createSlice({
  name: 'user',
  initialState: {} as IReduxUser,
  reducers: {
    signIn: (state, action) => {
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
