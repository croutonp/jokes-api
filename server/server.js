// 1. import all dependencies
const express = require("express"); // import express from "express"
const app = express();
require('dotenv').config();


const port = process.env.PORT;

require("./configs/mongoose.config")

// 2. configure express
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 3. routes & logic

const routes = require("./routes/jokes.routes")
routes(app)

// 4. listen to the port
app.listen(port, ()=>console.log(`Listening on port: 8000`))
// 5. import routes (after routes are done -- may need to complete the models & the backbone of the controller first)
