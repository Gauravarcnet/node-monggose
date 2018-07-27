const mongoose=require('mongoose');
mongoose.Promise=require('bluebird');

const Dishes=require('./models/dishes');


const url='mongodb://localhost:27017/conFusion';

const connect=mongoose.connect(url,{
  useNewUrlParser:true
});
connect.then((db)=>{
  console.log("connected to server correctly");

Dishes.create({
    name:"IdliSambhar1",
    description:"SouthIndian Dish"
  })
.then((dish)=>{
  console.log(dish);

  return Dishes.findByIdAndUpdate(dish._id,{
    $set:{description:'Updated Test'}
  },{
    new :true
  })
  .exec();
})
.then((dish)=>{
  console.log(dish);
  dish.comments.push({
    rating:5,
    comment:"good",
    author:"gaurav"
  });
return dish.save()
})
.then((dish)=>{
  console.log(dish);
})
} )
