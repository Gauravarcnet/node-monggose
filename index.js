const mongoose=require('mongoose');
mongoose.Promise=require('bluebird');

const Dishes=require('./models/dishes');


const url='mongodb://localhost:27017/conFusion';

const connect=mongoose.connect(url,{
  useNewUrlParser:true
});
connect.then((db)=>{
  console.log("connected to server correctly");

  var newDish=Dishes({
    name:"Dosa366",
    description:"SouthIndian Dish"
  });

  newDish.save()
  .then((dish)=>{
    console.log(dish);

    return Dishes.find({}).exec();
  })
  .then((dish)=>{
    console.log(dish);

  });


} )
