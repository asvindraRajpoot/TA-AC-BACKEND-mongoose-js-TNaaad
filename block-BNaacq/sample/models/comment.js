// Each comment can have fields:-

// - content
// - author -> ID of user
// - article ->
// - timestamps()
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var commentSchema=new Schema({
    content:{type:String,required:true},
    author: {type:Schema.Types.ObjectId,required:true},
    article:String
},{timestamps:true})

module.exports=mongoose.model(commentSchema);