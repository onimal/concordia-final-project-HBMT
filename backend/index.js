//dependencies
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const nodemailer = require("nodemailer");

require("dotenv").config();
const { GMAIL_PWD } = process.env


//port definition
const PORT = 8000;

//handlers
const {getAppointments} = require("./handlers/GetAppointments")
const {createNewAppointment} = require("./handlers/CreateNewAppointment")
const {createTherapist} = require("./handlers/CreateTherapist")
const {createNewCustomer} = require("./handlers/CreateNewCustomer")
const {sendEmail} = require("./handlers/SendEmail")

//create nodemailer transporter using gmail service
//e-mail functionality built with the help of this source:
//https://w3collective.com/react-contact-form/

contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "hbmt.test@gmail.com",
        pass: GMAIL_PWD,
    },
}),

//verify transporter connectivity
contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("ready to send");
    }
});

//server
express()

    .use(express.json())
    .use(morgan("tiny"))
    .use(helmet())
    .use(cors())

    //endpoints
    .get('/appointments', getAppointments)    
    .post('/appointments', createNewAppointment)
    .post('/therapists', createTherapist)
    .post('/customers', createNewCustomer)
    .post('/contact', sendEmail)

    .listen(PORT, () => console.info(`Listening on port ${PORT}`));