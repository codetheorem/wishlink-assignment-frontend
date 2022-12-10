import axios from 'axios'
const { apiURL } = require('../config.json')


const config = {
    baseURL: apiURL,
  }

const apiClient = axios.create(config)

function apiCall(url) {
    return apiClient.request({
      url,
      method: 'get'
    })
  }
  
  export default apiCall
