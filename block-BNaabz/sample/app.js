var express=require('express');
var mongoose=require('mongoose');

var app=express();

mongoose.connect('mongodb://localhost/test',(err)=>{
    console.log(err?err:"Connected to Database");
})



app.listen(2000,()=>{
    console.log('server is listening at port 2k');
})