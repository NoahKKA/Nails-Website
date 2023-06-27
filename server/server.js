//DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const path = require('path')
const cors = require('cors')


//MIDDLEWARE
require('dotenv').config()
app.use(cors())
app.use()(express.urlencoded({ extended:false }));

// LISTEN
app.listen(4005, () => {
    console.log("Server is running on port 4005")
})

// 404 Page, Haven't pushed anything yet
app.get('*', (req, res) => {
    res.send('404')
  })
