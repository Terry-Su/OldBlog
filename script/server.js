const path = require('path')
const express = require('express')
const app = express()
const NODE_PORT = process.env.NODE_PORT

// create server
app.use(express.static(path.resolve(__dirname, './../')))

// // 404
app.use(function (req, res, next) {
  res.status(404).redirect(`http://localhost:${NODE_PORT}?p=${req.originalUrl}`)
  next()
})

app.listen(parseInt(NODE_PORT))