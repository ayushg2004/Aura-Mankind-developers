const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const investsignup = new mongoose.Schema({
    firstname: {
        type: String,
        requried: true,
    },
    lastname: {
        type: String,
        requried: true,
    },
    email: {
        type: String,
        requried: true,
    },
    personalkey: {
        type: String,
        requried: true,
    }
})


investsignup.pre('save',async function(){
    let hashpersonalkey=await bcrypt.hash(this.personalkey,10)
    this.personalkey=hashpersonalkey;
    console.log(this.personalkey)
})

investsignup.methods.checkkey = async function(pass)
{
    return bcrypt.compare(pass,this.personalkey);
}


const Investorsignup = new mongoose.model('invest', investsignup);
module.exports = Investorsignup