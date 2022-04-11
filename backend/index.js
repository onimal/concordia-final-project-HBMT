//dependencies
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

//port definition
const PORT = 8000;

//handlers
//const {
//    getSomething,
//    postSomething,
//    ...
//} = require("./handlers")

//server
express()

    .use(morgan("tiny"))
    .use(helmet())
    .use(cors())

    //endpoints

    //Create endpoints here
    //.get("/...", getSomething)




    .listen(PORT, () => console.info(`Listening on port ${PORT}`));