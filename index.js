const express = require("express");

const app = express();


app.use(express.urlencoded({extended : true}));

const path = require("path");
app.set("view enigine" ,"ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")))

const port = 3002;

app.listen(port ,() =>{
    console.log("app is listening on port 3000 ")
})
