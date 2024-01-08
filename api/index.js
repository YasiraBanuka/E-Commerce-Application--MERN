const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://banuka1216:banuka1216@cluster0.60i7kst.mongodb.net/shop?retryWrites=true&w=majority"
    )
    .then(() => console.log("DB connection successfull"))
    .catch((err) => console.log(err));

app.listen(5000, () => {
    console.log('Backend server is running');
})