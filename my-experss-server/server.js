const express = require("express");

const app =express();

app.get("/",function(req , res){
    res.send("hello world");
});

app.get("/contact",function(req , res){
    res.send("contact me");
});

app.get("/aboutus",function(req,res){
    res.send("<h1>I'm a web developer</h1>");
});

app.get("/hobbies",function(req,res){
    res.send("basketball");
});
app.listen(3000, function(){
    console.log("server started");
}) ;