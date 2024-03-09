import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'auth',
  initialState: {
    id: '',
    password: '',
    nickname: '',
  },
  reducers: {
    init: () => {
      return {
        id: '',
        password: '',
        nickname: '',
      }
    },
    changeId: (state, action) => {
      return {
        ...state,
        id: action.payload,
      }
    },
    changePassword: (state, action) => {
      return {
        ...state,
        password: action.payload,
      }
    },
    changeNickname: (state, action) => {
      return {
        ...state,
        nickname: action.payload,
      }
    },
  },
})

export const { init, changeId, changePassword, changeNickname } = slice.actions
export default slice.reducer
