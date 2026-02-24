
let express = require('express');
require("dotenv").config()
let app = express();
const checkTokenMiddleware = require('./checkTokenMiddleware');

//checking debug token from env file
// console.log(process.env.MYToken);  


// Middleware function to log request details

app.use(express.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
    res.send({
        status:1,
        message:"Welcome to the homepage",
    });
});

app.get('/news', checkTokenMiddleware, (req, res) => {
    res.send({
        status:1,
        message:"News fetched successfully",
    });
});

app.listen(process.env.port || 5000);