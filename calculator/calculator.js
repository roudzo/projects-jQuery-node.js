const express = require("express");
const bodyparser =require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended: true}));

app.get("/",function(req,res){
    // dirname= directory name means the location of this file + the file we want to access
res.sendFile(__dirname +"/index.html");
});

app.post("/", function(req,res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("anwer is here " + result);
});

app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname +"/bmiCalculator.html");
});

app.post("/bmicalculator" , function(req,res){

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight/( weight* height);

res.send("your bmi is "+ bmi);


});


app.listen(3000,function(){
    console.log("server started");
});