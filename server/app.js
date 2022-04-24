const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const recipeRouter = require('./routes/recipes');
const bodyParser = require('body-parser');
require("dotenv").config();

const port = process.env.PORT || 5001;

const app = express();


//30mb is the max image size you can upload
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

// to connect my server side with client side 
app.use(cors());
app.use('/recipes', recipeRouter);

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) console.log(err)
        else console.log("mongodb is connected");
    }
);
app.listen(port, () => console.log(`The server is up and running on port ${port}`));