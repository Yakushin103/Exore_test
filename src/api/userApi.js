import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com'
})

export const getUser = async () => {
  return await instance.get(`/carts/1`).then(res => res.data)
}

const userApi = {
  getUser
}

export default userApi