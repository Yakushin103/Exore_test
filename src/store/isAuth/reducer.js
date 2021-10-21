import { createSlice } from '@reduxjs/toolkit'

const getInitialStore = () => ({
  user: {}
})

const mainSlice = createSlice({
  name: 'user',
  initialState: getInitialStore(),
  reducers: {
    updateUser: (store, { payload }) => ({
      ...store,
      user: { ...payload }
    })
  }
})

export const {
  updateUser
} = mainSlice.actions

export default mainSlice.reducer