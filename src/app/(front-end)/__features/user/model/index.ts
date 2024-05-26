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
      state.user!.nickname = action.payload
    },
    follow: (state, action) => {
      let following = state.user?.following ?? []
      const id = action.payload
      if (following?.includes(id)) {
        following = following.filter((f) => {
          return f !== id
        })
      } else {
        following.push(id)
      }
      state.user!.following = following
    },
  },
})

export default user.reducer

export const Action = user.actions
