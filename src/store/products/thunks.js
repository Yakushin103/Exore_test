import { createAsyncThunk } from '@reduxjs/toolkit'

import productsApi from '../../api/productsApi'
import { updateProductsData, updateCategories } from './reducer'

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (arg, { dispatch }) => {
    try {
      const products = await productsApi.getAll(arg)

      dispatch(updateProductsData(products))
    } catch (err) {
      dispatch(updateProductsData([]))
    }
  }
)

export const getProductsWithFilter = createAsyncThunk(
  'products/getProductsWithFilter',
  async (arg, { dispatch }) => {
    try {
      const products = await productsApi.getProductsFilter(arg.pieces, arg.catFilter)

      dispatch(updateProductsData(products))
    } catch (err) {
      dispatch(updateProductsData([]))
    }
  }
)

export const getCategories = createAsyncThunk(
  'products/getCategories',
  async (arg, { dispatch }) => {
    try {
      const categories = await productsApi.getAllCategories(arg)

      dispatch(updateCategories(categories))
    } catch (err) {
      dispatch(updateCategories([]))
    }
  }
)