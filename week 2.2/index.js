
const express = require("express");
const port = 3000
const app = express();

//create a todo app that lets users store todos on the server
// try to create a http server from scratch in c
// create an http server in rust uising actix-web
// create an http server in goland using the gurrila framework
// spring boot java
app.get('/',function(req, res){
    res.send('hello world!')
})
app.listen(port)
