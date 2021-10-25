
// Q. Add address Schema with fields

// - village -> String
// - city -> String
// - state -> String
// - pin -> number
// - user -> ObjectId of User from user schema

var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var addressSchema=new Schema({
    village:String,
    city:{type:String,required:true},
    state:{type:String,required:true},
    pin:Number,
    user:Schema.Types.ObjectId,
},{timestamps:true})

module.exports=mongoose.model('Address',addressSchema);