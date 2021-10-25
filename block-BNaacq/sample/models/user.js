// - name
// - email
// - age

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema=new Schema({
    name:{type:String,required:true},
    email:String,
    age:Number
})

module.exports=mongoose.model(userSchema);