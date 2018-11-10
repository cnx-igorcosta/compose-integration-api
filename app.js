const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const UsersController = require('./controllers/users-controller')

// Midlewares
app.use(bodyParser.json())

app.get('/', (req, res) => res.json({message: 'Users API!'}))
app.get('/api/v1/users', UsersController.get)

module.exports = app