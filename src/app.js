// const mongoose = require('mongoose');
const express = require("express");
const app = express();
const cors = require("cors");

require("./db/connection");



// app.use(require('./router/auth'))

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(require("./router/auth"))




//MIDLEWARE

// const middleware = (req, res, next) =>{
//     console.log(`hello this is middleware`);
//     next()
// }


// middleware();



// post



app.listen(port, () => {
    console.log(`port is running at ${port}`);
  });
  