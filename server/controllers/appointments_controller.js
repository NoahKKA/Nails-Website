const appointments = require('express').Router()
const db = require('../models')
const { Appointment, Accesorie} = db

//GET ALL APPOINTMENTS
appointments.get('/', async (req, res) => {
    try {
        const foundAppointments = await Appointment.findAll()
        res.status(200).json(foundAppointments)
    } catch (err){
        res.status(500).send('Server error')
        console.log(err)
    }
})

//GET ONE APPOINTMENT BY NAME
appointments.get('/:name'), async (req, res) => {
    try {
        const foundAppointment = await Appointment.findOne({
            where: {name: req.params.name},
            include: {model: Accesorie, as: 'accesories'}
        })
        res.status(200).json(foundAppointment)
    } catch (err) {
        console.log(err)
        res.status(500).send('Error Getting One Appointment')
    }
}

//CREATE NEW APPOINTMENT
appointments.post('/', async (req, res) => {
    try {
        const newAppointment = await Appointment.create(req.body)
        res.status(200).json({message: `Created A New Appointment`, data: newAppointment})
    } catch (err) {
        console.log(err)
        res.status(500).send('Error Creating Appointment')
    }
})

//UPDATE APPOINTMENT
appointments.put('/:id', async (req, res) => {
    try {
        const updatedAppointment = await Appointment.update(
            req.body,
            { where: {band_id: req.params.id} }
        )
        res.status(500).json({ message: `Updated ${updatedAppointment} Appointment!`})
    } catch (err) {
        console.log(err)
        res.status(500).status('Error Updating Appointment')
    }
})


//DELETE APPOINTMENT
appointments.delete('/:id', async (req, res) => {
    try {
        const deletedAppointment = await Appointment.destroy({ where: {appointmentId: req.params.id} })
        res.status(200).json({ message: `Succesfully Deleted Appointment Id ${req.params.id}!`})
    } catch(err) {
        console.log(err)
        res.status(500).send('Error Deleting Appointment')
    }
})
module.exports = appointments