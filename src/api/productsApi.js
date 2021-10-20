import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com'
})

const path = '/products'

export const getAll = async (limit) => {
  return await instance.get(`/products?limit=${limit}`).then(res => res.data)
}

export const getProductsFilter = (limit, filter) => {
  const data = filter === 'All' ?
    instance.get(`/products?limit=${limit}`).then(res => res.data) :
    instance.get(`/products/category/${filter}?limit=${limit}`).then(res => res.data)
  console.log('data', data)
  return data
}


export const getAllCategories = async () => {
  return await instance.get(`/products/categories`).then(res => res.data)
}

export const getProductById = async (id) => {
  return await instance.get(`/products/${id}`).then(res => res.data)
}

export default {
  getAll,
  getAllCategories,
  getProductsFilter,
  getProductById
}
