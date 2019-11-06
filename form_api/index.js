const mysql=require('mysql');
const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');

var app=express();

app.use(bodyparser.json());

app.use(cors());

app.use(
    bodyparser.urlencoded({extended:false})
)

var Users=require('./routes/Users.js');

app.use("/users",Users);


app.listen(3000,()=>console.log("Server is running on port 3000"));

