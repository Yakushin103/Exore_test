import { createSlice } from '@reduxjs/toolkit'

export const getInitialStore = () => ({
  isAuth: true,
  productsData: [],
  categories: [],
  toggleLoader: false,
  product: null,
  createdProduct: []
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
    }),
    updateProduct: (store, { payload }) => ({
      ...store,
      product: payload
    }),
    createdProduct: (store, { payload }) => ({
      ...store,
      createdProduct: [
        ...store.createdProduct,
        payload
      ]
    }),
    removeProduct: (store, { payload }) => ({
      ...store,
      createdProduct: [
        ...store.createdProduct.filter(prod => prod._id !== payload)
      ]
    }),
    updateProductById: (store, { payload }) => ({
      ...store,
      createdProduct: [
        ...store.createdProduct.map(prod => {
          if (prod._id === payload._id) {
            console.log('reducer', payload)
            return { ...payload }
          } else {
            return prod
          }
        })
      ]
    })
  }
})

export const {
  updateProductsData,
  updateCategories,
  toggleLoader,
  updateProduct,
  createdProduct,
  removeProduct,
  updateProductById
} = mainSlice.actions

export default mainSlice.reducer