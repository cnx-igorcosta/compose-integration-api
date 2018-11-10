const PersonsApi = require('../api/persons-api')

module.exports = {
  async get(req, res) {
    try {
      const { data: { data } } = await new PersonsApi().getPersons()
      return res.json({ data })
    
    } catch (err) {
      console.log(err)
      res.status(404).end()
    }
  },
}