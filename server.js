const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const expressLayout = require("express-ejs-layouts");
const PORT = process.env.PORT || 3300;
const mongoose=require('mongoose')
//Databse Connection
const url='mongodb://localhost:27071/PizzaMania';

/*const connection=mongoose.connection;
connection.once('open',()=>{
  console.log('Database Connected...');
}).catch(err=>{
  console.log('Connection Failed')
});*/
//Assets
app.use(express.static("public"));
//home route


// set Template engine
app.use(expressLayout);
app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs")

require('./routes/web')(app)



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`) 
})
