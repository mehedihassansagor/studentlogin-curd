const express = require("express");
require("./db/connection");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.get('/', (req,res) => {
    res.send("this is me")
})

app.listen(port, () => {
    console.log(`port is running at ${port}`);
  });
  