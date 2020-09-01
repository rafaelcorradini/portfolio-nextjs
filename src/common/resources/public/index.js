import api from '../api'

const axios = api(`${process.env.API_URL}/api`)

const Public = {
  works: async () => {
    return {
      data: [
        {
          name: 'Mercadão dos Enxovais',
          url: 'https://mercadaodosenxovais.com.br',
          frontend: [
            'react',
            'next',
            'material-ui',
            'styled-components',
            'formik',
            'redux'
          ],
          backend: ['rails', 'rails-admin', 'restful']
        }
      ]
    }
  }
}

export default Public
