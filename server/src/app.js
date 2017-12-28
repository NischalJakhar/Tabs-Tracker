console.log('Hello World')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// For testing pass a payload for email using postman
app.post('/register', (req, res) => res.send({message: `Hello ${req.body.email}!!!Your User was registered`}))
app.listen(process.env.PORT || 1777)
