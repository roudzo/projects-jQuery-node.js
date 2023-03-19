const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/fruitsDB",{ useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review : String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
  name : "orange",
  rating: 5 , 
  review: "bland"
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age : Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
  name: " Jhon",
  age: 17
});
person.save();
const apple = new Fruit ({
  name: " Apple",
  rating: 7,
  review : "pretty sweet"
});
const banana = new Fruit ({
  name: " Banana",
  rating: 5,
  review : "sweet"
});
const kiwi = new Fruit ({
  name: " Kiwi",
  rating: 7,
  review : "pretty sweet"
});

Fruit.insertMany([apple,kiwi,banana], function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Successful");
  }
    
});








