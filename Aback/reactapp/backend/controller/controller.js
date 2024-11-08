const express = require("express")
const Signup = require('../model/signup')
const Investorsignup = require("../model/invest")
const Pitchidea = require("../model/pitchidea")


const home = (req, res) => {
    res.send("I am on home page")
}

const signup = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        const finduser = await Signup.findOne({ email })

        if (finduser) {
            res.status(404).send("Response User Already exist");
            console.log("Already user exist")
        }
        else {
            const createuser = await Signup.create({ firstname, lastname, email, password })
            const jwttoken = await createuser.gettoken();
            res.json({
                user: createuser,
                token: jwttoken
            }).status(200);
            console.log("User created")
        }

    } catch (error) {
        console.log(error)
    }
}



const login = async (req, res) => {
    const { email, password } = req.body;
    const loginfind = await Signup.findOne({ email })

    if (loginfind) {
        const passcom = await loginfind.checkpass(password);
        const jwttoken = await loginfind.gettoken();
        if (passcom) {
            // res.status(200).json({
            //     "Message": "Login succesfully",
            //     name: loginfind.firstname,
            //     token: jwttoken

            // });
            res.json({
                user: loginfind,
                token: jwttoken
            })
            console.log("Login success from server side");
        }
        else {
            res.status(404).send("invalid pass from server side");
            console.log("invalid pass from server side");
        }
    }
    else {
        res.status(404).send("User not found");
        console.log("invalid creditials from server side");
    }
}

const contact = (req, res) => {
    res.send("I am on contact page")
}



const investsignup = async (req, res) => {
    try {
        const { firstname, lastname, email, personalkey } = req.body;
        const finduser = await Investorsignup.findOne({ email: email })

        if (finduser) {
            res.status(404).send("Response User Already exist INVEST-SIDE");
            console.log("Already user exist INVEST-SIDE")
        }
        else {
            const createuser = await Investorsignup.create({ firstname, lastname, email, personalkey })
            // const jwttoken = await createuser.gettoken();
            res.json({
                user: createuser,
                // token: jwttoken
            }).status(200);
            console.log("User created INVEST-SIDE")
        }

    } catch (error) {
        console.log(error)
    }
}

const investlogin = async (req, res) => {
    const { email, personalkey } = req.body;
    const loginfind = await Investorsignup.findOne({ email })

    if (loginfind) {
        const passcom = await loginfind.checkkey(personalkey);
        const createuser = await Pitchidea.find({});
        // const jwttoken = await loginfind.gettoken();
        if (passcom) {
            res.status(200).json({
                user:createuser,
                email: loginfind.email,
                // token: jwttoken
            });
            console.log("Login success from server side INVEST-SIDE");
        }
        else {
            res.status(404).send("invalid pass from server side INVEST-SIDE");
            console.log("invalid pass from server side INVEST-SIDE");
        }
    }
    else {
        res.status(404).send("User not found INVEST-SIDE");
        console.log("invalid creditials from server side INVEST-SIDE");
    }
}
const searchidea = async (req, res) => {
    try {
        let {email}=req.body
        const createuser = await Pitchidea.find({});

        res.json(
            createuser
        ).status(200)

    } catch (error) {
        console.log(error)
    }
}

const pitchidea = async (req, res) => {
    try {
        const { title, topic, email, about, number } = req.body;
        const createuser = await Pitchidea.create({ title, topic, email, about, number })

        res.json(createuser).status(200);
        console.log("Pitch created ")

    } catch (error) {
        console.log(error)
    }
}

module.exports = { home, login, signup, contact, investsignup, investlogin, pitchidea, searchidea }