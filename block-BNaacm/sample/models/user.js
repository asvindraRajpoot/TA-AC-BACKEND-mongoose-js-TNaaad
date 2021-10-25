var mongoose=require('mongoose');

var Schema=mongoose.Schema;


var userSchema=new Schema({
    name:String,
    age:{type:Number,default:18},
    hobbies:[String],
    Address:{type:String,maxlength:20},
})

module.exports=mongoose.model('User',userSchema);