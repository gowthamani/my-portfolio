const express = require('express')
const app = express()

app.use("/",(req,res)=>{
    res.send("server running successfully")
});

app.listen(5000)