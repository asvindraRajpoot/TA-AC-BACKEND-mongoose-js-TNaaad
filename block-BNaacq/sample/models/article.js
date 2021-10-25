// Each article can have fields :-

// - title
// - description
// - tags
// - likes
// - author -> ID of user
// - comments
// - timestamps()
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var articleSchema=new Schema({
    title:{type:String,required:true},
    description:String,
    tags:[String],
    likes:{type:Number,default:0},
    author:{type:Schema.Types.ObjectId,required:true}
    
},{timestamps:true})

module.exports=mongoose.model(articleSchema);