const express = require("express");
const mongoose = require("mongoose");// require mongoose
const bodyParser = require("body-parser");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//create a todolistDB database and connect it
mongoose.connect("mongodb://127.0.0.1/todolistDB", {useNewUrlParser:true});

//create a Schema of only name feild
const itemSchema = new mongoose.Schema({
     name:String
});

const Item = mongoose.model("Item", itemSchema); // create a model of Items

const item1= new Item({
  name:"Welcome to the todolist"
});

const item2= new Item({
  name:"Click + button to add items"
});

const item3= new Item({
  name:"click delete to remove item"
});

const defaultItems = [item1, item2, item3 ]; // create a array of items doc




app.get("/", function(req, res) {

 Item.find({}, function(err, foundItems){

    if(foundItems.length === 0){
        Item.insertMany(defaultItems, function(err){
            if(err){
                console.log(err);
            }else{
                console.log("successfully added")
            }
        });
        res.redirect("/");    
    }else{
        res.render("list",{listTitle: "today" , newListItems: foundItems});
    }
});

});

app.post("/delete",function(req,res){
    const checkedItemId = req.body.checkbox;

    Item.findByIdAndRemove(checkedItemId, function(err){
        if(!err){
            console.log("successfully deleted");
        }
        res.redirect("/");
    });
});
        
app.post("/",function(req,res){
    const newName = req.body.newItem;
    
    const item = new Item({
        name: newName
    });
    item.save();

    res.redirect("/");
});

app.get("/work" , function(req,res){
    res.render("list",{listTitle:"work", newListItems: workItems});
});
        

app.get("/about",function(req,res){
    res.render("about");
});
    





app.listen (3000, function(){
console.log("Server started on port 3000");
});