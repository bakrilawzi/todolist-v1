const express = require("express");
const app =  express();
var todoss =["Wakeup","Eat","Start Working"];
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"))
app.get("/",function(req,res){
    var today = new Date();
    var options = {weekday:"long",day:"numeric",month:"long"};
    current_time = today.toLocaleDateString("EN-US",options);
    res.render('list',{name:current_time, items:todoss})
});
app.post("/",function(req,res){
    let todos = req.body.duties;
    todoss.push(todos);
    console.log(todoss)
    res.redirect("/");
})
app.listen(3000,function(){
    // var today = new Date();
    // var options = {weekday:"long",day:"numeric",month:"long"};
    // CURRENTDAY = today.toLocaleDateString("EN-US",options);
    console.log("we're listening on the port 3000");
    
});