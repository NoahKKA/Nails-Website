const appointments = require('express').Router()
const db = require('../models')
const { Appointment } = db

//GET ALL BOOKS
appointments.get('/', async (req, res) => {
    try {
        const foundAppointments = await Appointment.findAll()
        res.status(200).json(foundAppointments)
    } catch (err){
        res.status(500).send('Server error')
        console.log(err)
    }
})

module.exports = appointments