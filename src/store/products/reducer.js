import { createSlice } from '@reduxjs/toolkit'

export const getInitialStore = () => ({
  isAuth: true,
  productsData: [],
  categories: []
})

const mainSlice = createSlice({
  name: 'products',
  initialState: getInitialStore(),
  reducers: {
    updateProductsData: (store, { payload }) => ({
      ...store,
      productsData: payload
    }),
    updateCategories: (store, { payload }) => ({
      ...store,
      categories: payload
    })
  }
})

export const {
  updateProductsData,
  updateCategories
} = mainSlice.actions

export default mainSlice.reducer