var express=require('express');
var app=express();
var mongoose=require('mongoose');



mongoose.connect('mongodb://127.0.0.1:27017/test',(err)=>{
    if(err)throw err;
    console.log('connected to database');
})


app.listen(2000,()=>{
    console.log('Server is listening at port 2000');
})