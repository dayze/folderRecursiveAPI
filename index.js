require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')
const {exec} = require('child_process')
const app = express()
const {readRecursive} = require('./utils')

app.use(bodyParser.json())
app.use(cors())
app.use(helmet())

app.get('/files', (req, res) => {
  res.json(readRecursive(process.env.SCAN_PATH))
})

app.delete('/file', (req, res) => {
  try {
    exec(`rm -rf ${req.body.filePath}`)
    res.json({error: false})
  } catch (e) {
    res.status(500).json({error: true})
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Starting on port ${process.env.PORT}`)
})