import { createSlice } from '@reduxjs/toolkit'

export const getInitialStore = () => ({
  isAuth: true,
  productsData: [],
  categories: [],
  toggleLoader: false
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
    }),
    toggleLoader: (store, { payload }) => ({
      ...store,
      showLoader: typeof payload === 'boolean' ? payload : !store.showLoader,
    })
  }
})

export const {
  updateProductsData,
  updateCategories,
  toggleLoader
} = mainSlice.actions

export default mainSlice.reducer