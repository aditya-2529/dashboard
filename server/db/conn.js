require('../models/schema');
const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config({path:"../config.env"});


mongoose.connect(process.env.DB).then( () => console.log("Success")).catch( (err) => console.log(err));