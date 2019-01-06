const { expect } = require('chai')
const app = require('../../app')

const request = supertest(app)

describe('[UserService]', () => {
  describe('#create()', () => {
    let res
    
    before(async () => {
      res = await request.get('/api/v1/users')
    })

    it('Should respond with status 200', () => {
      expect(res.status).to.be.eql(200)
    })
  })
})