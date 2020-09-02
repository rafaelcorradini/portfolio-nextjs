import api from '../api'

const axios = api(process.env.API_URL)

const Public = {
  listWorks: () => axios.get('/works')
}

export default Public
