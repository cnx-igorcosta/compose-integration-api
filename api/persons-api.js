const envLoader = require('env-o-loader')
const axios = require('axios')

const { personsApiUri } = envLoader('../config/api-integration.yaml')

module.exports = class PersonsApi {
  constructor() {
    this.uri = personsApiUri
  }

  _getHost(endpoint) {
    return `${this.uri}${endpoint}`
  }

  getPersons() {
    const host = this._getHost('/api/v1/persons')
    return axios(host)
  }
}