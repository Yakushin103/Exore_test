import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import productsApi from '../../api/productsApi'
import {
  updateProductsData,
  updateCategories,
  updateProduct,
  createdProduct,
  removeProduct,
  updateProductById
} from './reducer'

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

export const getProductById = createAsyncThunk(
  'products/getProductById',
  async (arg, { dispatch }) => {
    try {
      const product = await productsApi.getProductById(arg)

      dispatch(updateProduct(product))
    } catch (err) {
      dispatch(updateProduct(null))
    }
  }
)

export const createNewProduct = createAsyncThunk(
  'products/createNewProduct',
  async (arg, { dispatch }) => {
    try {
      const addProduct = await productsApi.createNewProduct(arg)
      toast.success('Product added!!!')
      dispatch(createdProduct({
        ...addProduct,
        createAt: arg.createAt,
        public: arg.public
      }))
    } catch (err) {
      dispatch(createdProduct(null))
    }
  }
)

export const removeProductById = createAsyncThunk(
  'products/createNewProduct',
  async (arg, { dispatch }) => {
    try {
      if (arg.global) {
        await productsApi.removeProduct(arg.id)
        toast.success('Product removed!!!')
      } else {
        dispatch(removeProduct(arg.id))
        toast.success('Product removed!!!')
      }
    } catch (err) {
      dispatch(removeProduct(null))
    }
  }
)

export const updateProductAC = createAsyncThunk(
  'products/createNewProduct',
  async (arg, { dispatch }) => {
    try {
      if (arg.global) {
        await productsApi.updateProductById(arg.id)
        toast.success('Product updated!!!')
      } else {
        console.log('data', arg.id, arg.data)
        dispatch(updateProductById({ id: arg.id, data: arg.data }))
        toast.success('Product updated!!!')
      }
    } catch (err) {
      dispatch(updateProductById(null))
    }
  }
)

