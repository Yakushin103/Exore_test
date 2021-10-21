import { createAsyncThunk } from '@reduxjs/toolkit'

import userApi from '../../api/userApi'
import { updateUser } from './reducer'

export const getUser = createAsyncThunk(
  'user/getUser',
  async (arg, { dispatch }) => {
    try {
      const user = arg.auth ? await userApi.getUser() : null
      dispatch(updateUser(user))
    } catch (err) {
      dispatch(updateUser([]))
    }
  }
)