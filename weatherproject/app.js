const express = require("express");
const https = require("https");
// body parser is used for linkin the input form and buttons to the app 
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended:true}));


app.get("/",function(req,res){

    res.sendFile(__dirname + "/index.html");
});
   
app.post("/",function(req,res){

    // this is the body parser
const query = req.body.cityName;

const apikey = "0366f6391b5be07d12c4650cf9f416e1"
const units = "metric" ;
const url="https://api.openweathermap.org/data/2.5/weather?q="+ query + "&appid=" + apikey + "&units="+ units + "";

https.get(url,function(response){
    console.log(response.statusCode);

    response.on("data",function(data){
        const weatherdata= JSON.parse(data);
        const temp= weatherdata.main.temp;
        const weatherdiscription = weatherdata.weather[0].description;
        const icon = weatherdata.weather[0].icon     
        const urlImg ="http://openweathermap.org/img/wn/"+ icon +"@2x.png"      

        res.write("<p> the weather is currently "+ weatherdiscription + "</p>");
        res.write("<h1> the tempeture in " + query + " is " + temp + " degres cel </h1>");
        res.write("<img src=" + urlImg + " >");
        
        res.send();
        });
    });
       
});
     





app.listen(3000,function(){
    console.log("server start");
});