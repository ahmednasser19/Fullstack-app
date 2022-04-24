const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const recipeRouter = require('./routes/recipes');
require("dotenv").config();


const app = express();
const port = process.env.PORT || 5001;

// to connect my server side with client side 
app.use(cors());
app.use(express.json());

app.use('/recipes', recipeRouter);


mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) console.log(err)
        else console.log("mongodb is connected");
    }
);


app.listen(port, () => console.log(`The server is up and running on port ${port}`));