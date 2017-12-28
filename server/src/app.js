/* eslint-disable*/ 

console.log('Hello World')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('/models')
const config = require('./config/config')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

// For testing pass a payload for email using postman
sequelize.sync().then(() => {
  app.listen(config.port)
  console.log(`Server running on the port: ${config.port}`)
})
