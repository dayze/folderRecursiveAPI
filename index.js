require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const app = express()
const {readRecursive} = require('./utils')

app.use(helmet())

app.get('/getFiles', (req, res) => {
  res.json(readRecursive(process.env.SCAN_PATH))
})

app.listen(process.env.PORT, () => {
  console.log(`Starting on port ${process.env.PORT}`)
})