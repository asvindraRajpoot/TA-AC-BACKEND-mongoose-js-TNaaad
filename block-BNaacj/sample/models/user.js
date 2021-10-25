var mongoose=require('mongoose');
var Schema=mongoose.Schema;



// - contains password field with minimum 5 characters and maximim 15
// - add createdAt field of type date and default it to current date.

var userSchema=new Schema({
   name:String,
   password:{type:String,minlength:5,maxlength:15},
   createAt:{type:Date,default:Date.now()}

},{timestamps:true})