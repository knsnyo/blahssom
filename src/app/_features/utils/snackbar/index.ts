import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'util',
  initialState: {
    on: false,
    message: '',
    color: '',
  },
  reducers: {
    onSnackbar: (_, action) => {
      return {
        on: true,
        message: action.payload.message,
        color: action.payload.color,
      }
    },
    offSnackbar: () => {
      return { on: false, message: '', color: '' }
    },
  },
})

export const { onSnackbar, offSnackbar } = slice.actions
export default slice.reducer
