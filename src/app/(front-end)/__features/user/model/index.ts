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
      return action.payload
    },
    updateProfileImage: () => {},
    updateNickname: () => {},
  },
})

export const { signIn } = user.actions
export default user.reducer
