
let express = require('express');
let app = express();
const checkTokenMiddleware = require('./checkTokenMiddleware');

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

app.listen("3000");