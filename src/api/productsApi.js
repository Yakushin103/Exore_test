import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'withCredentials': true,
    'mode': 'no-cors',
  }
})

export const getAll = async (limit) => {
  return await instance.get(`/products?limit=${limit}`).then(res => res.data)
}

export const getProductsFilter = (limit, filter) => {
  const data = filter === 'All' ?
    instance.get(`/products?limit=${limit}`).then(res => res.data) :
    instance.get(`/products/category/${filter}?limit=${limit}`).then(res => res.data)
  return data
}


export const getAllCategories = async () => {
  return await instance.get(`/products/categories`).then(res => res.data)
}

export const getProductById = async (id) => {
  return await instance.get(`/products/${id}`).then(res => res.data)
}

export const createNewProduct = async (data) => {
  return await instance.post(`/products`, data).then(res => res.data)
}

export const removeProduct = async (id) => {
  return await instance.delete(`/products/${id}`).then(res => res.data)
}

export const updateProductById = async (id) => {
  return await instance.put(`/products/${id}`).then(res => res.data)
}

const productsApi = {
  getAll,
  getAllCategories,
  getProductsFilter,
  getProductById,
  createNewProduct,
  removeProduct,
  updateProductById
}

export default productsApi
