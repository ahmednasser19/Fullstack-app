const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;


mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) console.log(err)
        else console.log("mongodb is connected");
    });


app.listen(port, () => console.log(`The server is up and running on port ${port}`))