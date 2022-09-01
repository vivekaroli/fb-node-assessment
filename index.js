const express=  require('express');
const User = require('./models/User')
const data = require('./data')
const bodyParser=require('body-parser')
const cors =  require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.json())

app.get('/',function(req,res){
    res.send("here")
})

app.get('/getUsers',function(req,res){
    console.log("here")
    res.send(data.dataObj)
})

app.post('/addUser',validate, function(req,res){
    let user =  new User(req.body.firstName,req.body.lastName,req.body.email,req.body.contactNo);
    data.add(user)
    res.send("added")
})

app.put('/updateUser/:id',function(req,res){
    let result = data.update(req.body,req.params.id)
    if(result == true) {
        res.send("updated")
    }
    else {
        res.send("failed")
    }

})

app.delete('/deleteUser',function(req,res){
    let result = data.deleteUser(req.body.id)
    if(result == true) {
        res.send("deleted")
    }
    else {
        res.send("failed")
    }

})

function validate(req,res,next) {
    let data = req.body;
    if(data.firstName && data.lastName && data.email && data.contactNo) {
        next();
    }
    else {
        res.send("Please add all the required parameters")
    }
}
app.listen(4000,()=>{
    console.log("connected successfully at 6000")
})