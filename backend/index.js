//dependencies
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

//port definition
const PORT = 8000;

//handlers
const {getAppointments} = require("./handlers/GetAppointments")
const {createNewAppointment} = require("./handlers/CreateNewAppointment")
const {createTherapist} = require("./handlers/CreateTherapist")


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


    .listen(PORT, () => console.info(`Listening on port ${PORT}`));