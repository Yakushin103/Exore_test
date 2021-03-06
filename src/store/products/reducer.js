import { createSlice } from '@reduxjs/toolkit'

const getInitialStore = () => ({
  productsData: [],
  categories: [],
  product: null,
  createdProduct: [],
  showLoader: false,
})

const mainSlice = createSlice({
  name: 'products',
  initialState: getInitialStore(),
  reducers: {
    updateProductsData: (store, { payload }) => ({
      ...store,
      productsData: payload,
      showLoader: !store.showLoader
    }),
    updateCategories: (store, { payload }) => ({
      ...store,
      categories: payload
    }),
    updateProduct: (store, { payload }) => ({
      ...store,
      product: payload,
      showLoader: !store.showLoader
    }),
    createdProduct: (store, { payload }) => ({
      ...store,
      createdProduct: [
        ...store.createdProduct,
        payload
      ]
    }),
    updateCreatedProduct: (store, { payload }) => ({
      ...store,
      createdProduct: payload
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
            return { ...payload }
          } else {
            return prod
          }
        })
      ]
    }),
    toggleLoader: (store, { payload }) => ({
      ...store,
      showLoader: !store.showLoader
    })
  }
})

export const {
  updateProductsData,
  updateCategories,
  updateProduct,
  createdProduct,
  removeProduct,
  updateProductById,
  updateCreatedProduct,
  toggleLoader
} = mainSlice.actions

export default mainSlice.reducer