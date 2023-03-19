const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");
const https = require("https");


const app = express();
// used to read local imgs and css files using a static folder that we called public

app.use(express.static("public"));

app.use(bodyparser.urlencoded({extended:true}));


app.get("/", function(req,res){

    res.sendFile(__dirname + "/signup.html")    ;
});

app.post("/",function(req,res){


    var firstName = req.body.fname;
    var lastName = req.body.lname;
    var email = req.body.email;

    var data = {
        members : [
            {
                email_address: email,
                status:"subscribed",
                merge_fields:{
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }

    var jsonData= JSON.stringify(data);

    const url = "https://us8.api.mailchimp.com/3.0/lists/34769dbf70;"

    const options = {
            method: "POST",
              auth: "Roudy1: //807dda3d938cea086695bcbcdebfe133-us8 "
            }

          const request =  https.request(url, options, function (response){

                if(response.statusCode===200){
                    res.sendFile(__dirname + "/success.html")
                }
                else(res.sendFile(__dirname + "/failure.html"));
                            response.on("data", function(data) {
                                console.log(JSON.parse(data));
                            });
                        });
                request.write(jsonData);
                request.end();
      }); 

      app.post("/failure",function(req,res){

        res.redirect("/");
      })
app.listen(3000,function(){

    console.log("server start ");
});
