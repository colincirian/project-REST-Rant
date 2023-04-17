require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/Homepage', (req, res) => {
    res.send('Hello World')
})

app.get('*', (req, res) => {
    res.status(404).send("<h1>404 PAGE</h1>")
})

app.listen(process.env.PORT)

const router = require('express').Router()
router.get('/places', (req, res) => {
    res.send('GET /places')
})

module.exports = router