import axios from 'axios'

const api = (baseURL) => {
  const instance = axios.create({
    baseURL
  })

  return instance
}

export default api
