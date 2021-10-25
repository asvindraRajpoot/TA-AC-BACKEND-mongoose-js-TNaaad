var express =require('express');
var app=express();
var mongoose=require('mongoose');

var User=require('./models/user');
app.use(express.json());

//connect to database
mongoose.connect('mongodb://localhost/users',(err)=>{
    console.log(err?err:'Connected to Database');
})

//middlewares

app.post('/users',(req,res)=>{
    User.create(req.body,(err,user)=>{
        console.log(err);
        res.json(user);
    })
})

app.get('/users',(req,res)=>{
    User.find({},(err,users)=>{
        if(err)throw err;
        res.json({users:users});
    })
})
app.get('/users/:id',(req,res)=>{
    let id =req.params.id;
    console.log(id);
    User.findById(id,(err,user)=>{
        console.log(user);
        if(err)throw err;
        res.json(user);
    })
})

app.put('/users/:id',(req,res)=>{
    let id =req.params.id;
    console.log(id);
    User.updateOne({id:id},req.body,{new:true},(err,user)=>{
        if(err)throw err;
        console.log(user);
        res.json(user);
    })
})

app.delete('/users/:id',(req,res)=>{
    let id =req.params.id;
    console.log(id);
    User.deleteOne({id:id},(err,user)=>{
        if(err)throw err;
        console.log(user);
        res.json(user);
    })
})






//error handlers

app.use((req,res,next)=>{
    res.send('Page not found');
})


//listener
app.listen(2000,()=>{
    console.log('server is listening at port 2000');
})
