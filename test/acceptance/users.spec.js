const { expect } = require('chai')
const supertest = require('supertest')
const nock = require('nock')
const app = require('../../app')

const request = supertest(app)

describe('[Users]', () => {
  describe('GET - /api/v1/users', () => {
    let res
    
    before(async () => {
      nock('http://localhost:3001')
        .get('/api/v1/persons')
        .reply(200, { data: [] })

      res = await request.get('/api/v1/users')
    })

    it('Should respond with status 200', () => {
      expect(res.status).to.be.eql(200)
    })
  })
})