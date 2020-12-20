require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./routes')
const errHandler = require('./middleware/errhandler')


app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', routes)
app.use(errHandler)

module.exports = app