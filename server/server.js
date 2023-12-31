//DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const path = require('path')
const cors = require('cors')


//MIDDLEWARE
require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:false }));
app.use(express.static(path.join(__dirname, '../build')))
// CONTROLLERS
const appointmentsController = require('./controllers/appointments_controller')
app.use('/api/appointments', appointmentsController)

// LISTEN
app.listen(4005, () => {
    console.log("Server is running on port 4005")
})

// 404 Page
app.get('*', (req, res) => {
    res.status(404).send('404: Page not found')
  })

