import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'user',
  initialState: {
    nickname: '',
  },
  reducers: {
    signOut: () => {
      return { nickname: '' }
    },
    setNickname: (state, action) => {
      return {
        ...state,
        nickname: action.payload,
      }
    },
  },
})

export const { setNickname, signOut } = slice.actions
export default slice.reducer
