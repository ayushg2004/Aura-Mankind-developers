const express = require('express')
const mongoose = require('mongoose')

const pitchidea = new mongoose.Schema({
    title: {
        type: String,
        requried: true,
    },
    topic: {
        type: String,
        requried: true,
    },
    email: {
        type: String,
        requried: true,
    },
    about: {
        type: String,
        requried: true,
    },
    number: {
        type: String,
        requried: true,
    }
})

const Pitchidea = new mongoose.model('pitchidea', pitchidea);
module.exports = Pitchidea