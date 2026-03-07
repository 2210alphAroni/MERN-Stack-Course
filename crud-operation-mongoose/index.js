let express = require("express");
var mongoose = require("mongoose");
require("dotenv").config();


// create express app
let app = express();

//connect to mongodb
mongoose.connect(process.env.DBURL).then(()=>{
    console.log("connected to mongodb");
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on port ${process.env.PORT}`);
    })
})
