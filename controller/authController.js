const User = require('../models/User');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const Otp = require('../models/Otp');
const sentOtp = require('../utils/sentOtp');
const sentOtpForForgotPass = require('../utils/sentOtpForForgotPass');


// api for authentication


// this is for send otp

const sendVerificationOtp = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        const isExist = await User.findOne({ email });
        // if user already have an account
        if (isExist) {
            return res.status(404).json({
                message: "user already exist"
            })
        }

        // if user not fill any field

        if (!firstName && !lastName && !email && !password) {
            return res.status(404).json({
                message: "all feild are required"
            })
        }


        // genrate otp

        const userOtp = await crypto.randomInt(1000, 9999);

        // calling function for sending email

       await sentOtp(email, userOtp);

        const otpSend = await Otp.create({ email, otp: userOtp });

        console.log("otp sent successfully", otpSend);
        return res.status(200).json({
            message: "otp sent successfully",
            otpEmail: otpSend
        })
    } catch (error) {
        res.status(500).json({
            message: "server error",
            error: error.message
        })
    }
}


// this is for verify otp

const verifyRegistrationOtp = async (req, res) => {
    try {

        const { firstName, lastName, email, password, otp } = req.body;
        
        // find otp which store in tempdb
        const userOtp = await Otp.findOne({ email });

        // if user not enter correct otp which sent by mail

        if (userOtp.otp !== otp) {
            return res.status(300).json({
                message: "invalid otp"
            })
        }
        // hash password
        const hashPass = await bcrypt.hash(password, 10);

        const user = await User.create({ firstName, lastName, email, password: hashPass, isVerified: true, });
        return res.status(200).json({
            message: "user register successfully",
            user
        })


    } catch (error) {
        res.status(500).json({
            message: "error",
            error: error.message
        })
    }
}

// this is for user login 

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        // if user not fill any feild

        if (!email || !password) {
            return res.status(300).json({
                message: "all fields are required",
            })
        }
        // if user not registered yet

        if (!user) {
            return res.status(300).json({
                message: "user doesn't exist",
            })
        }

        // match password using compare method

        const comparePass = await bcrypt.compare(password, user.password);

        // if password is not match

        if (!comparePass) {
            return res.status(300).json({
                message: "invalid password"
            })
        }
        return res.status(200).json({
            message: "user login successfully"
        })

    } catch (error) {
        res.status(500).json({
            message: "error occur",
            error: error.message
        })
    }
}

// this is for forgot password 

const forgotPassword = async (req , res) => {
    try {
        const email = req.body;

        if(!email){
          return  res.status(300).json({
                message:"plzz enter email"
            })
        }

        const isExist = User.findOne({email});

        if(!isExist){
            return res.status(300).json({
                message:"user doesn't exist"
            })
        }

         // genrate otp

        const userOtp = await crypto.randomInt(1000, 9999);

        // calling function for sending email

        sentOtpForForgotPass(email, userOtp);

        res.status(200).json({
            message:"email sent successfully",
            email
        })

    } catch (error) {
        res.status(500).json({
            message:"internal server error",
            error
        })
    }
}

module.exports = { sendVerificationOtp, verifyRegistrationOtp, userLogin , forgotPassword};



