var mongoose=require('mongoose');
var Schema=mongoose.Schema;

// - favorites field which should store array of strings
// - marks field which is array of numbers
var userSchema=new Schema({
    favorites:[String],
    marks:[Number],
})



// 1. village -> String
// 2. city -> String
// 3. state -> String
// 4. pin -> number
// 5. user -> ObjectId of User
var addressSchema=new Schema({
    village:String,
    city:String,
    state:String,
    pin:Number,
    user:Schema.Types.ObjectId,


})