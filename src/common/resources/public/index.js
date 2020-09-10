import api from '../api'

const axios = api('/api')

const Public = {
  listWorks: () => axios.get('/works'),
  contact: (data) => axios.post('/contact', data)
}

export default Public
