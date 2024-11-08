const express=require('express')
const router=express.Router();
const cont=require('../controller/controller')

router.route('/').get(cont.home)
router.route('/login').post(cont.login)
router.route('/signup').post(cont.signup)
router.route('/investsignup').post(cont.investsignup)
router.route('/investlogin').post(cont.investlogin)
router.route('/pitchidea').post(cont.pitchidea)
router.route('/searchidea').post(cont.searchidea)

module.exports=router;