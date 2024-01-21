const express = require("express");
const app = express(); 
const path = require('path');
const urlRoute = require("./routes/url");
const redirect = require("./routes/redirect");
const analytics = require("./routes/analytics");
const PORT = 3000;
require('dotenv').config();
// console.log(process.env);
const connectToMongoDB = require("./db/connect");

const lnk = process.env.DBlink;
// console.log(lnk);
connectToMongoDB()
.then(console.log('Database connected Successfully !!!!')); 


app.set("view engine", "ejs");
app.set("views",path.resolve("./views"));

app.get("/",async(req,res)=>{
     return res.render('home');
})

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/url",urlRoute);
app.use("/:shortId",redirect);
app.use("/analytics/:shortId",analytics);


app.listen(PORT, ()=>{
    console.log('Server is running  !!!');
 })