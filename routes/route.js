const express = require('express');
const addCart = require('../controller/addCart');
const getCart = require('../controller/getCart');
const deleteCart = require('../controller/deleteCart');
const increment = require('../controller/increment');
const {sendVerificationOtp , verifyRegistrationOtp , userLogin} = require('../controller/authController');

const route =  express.Router();

route.post('/addCart', addCart);

route.get('/getCart', getCart);
route.delete('/deleteCart/:id',deleteCart);
route.post('/increment',increment);
route.post('/sendVerificationOtp', sendVerificationOtp);
route.post('/verifyRegistrationOtp', verifyRegistrationOtp);
route.post('/userLogin', userLogin);

module.exports = route;