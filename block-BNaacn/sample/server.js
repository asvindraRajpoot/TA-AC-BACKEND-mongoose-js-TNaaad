var express=require('express');
var app=express();

var mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test',(err)=>{
    console.log(err?err:'Connected to Database');
})

app.use((req,res,next)=>{
    res.json('Welcome to express world');
})

app.listen(3000,()=>{
    console.log('server is listening at port 3000');
})