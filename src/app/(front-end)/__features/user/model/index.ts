import { createSlice } from '@reduxjs/toolkit'
import { IUser } from 'src/@types/user'

interface IReduxUser {
  user?: IUser
}

const user = createSlice({
  name: 'user',
  initialState: {} as IReduxUser,
  reducers: {
    signIn: (_, action) => {
      return action.payload
    },
    updateProfileImage: () => {},
    updateNickname: () => {},
  },
})

export default user.reducer

export const Action = user.actions
