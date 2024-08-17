const express = require("express");

const app = express();

app.get("/health-checkup", (req,res)=>{
    const  username =  req.headers.username;
    const password = req.headers.password;
    const kidneyID = req.query.kidneyID;

    if(username != "anish" || password != "Pass"){
        res.status(400).json({"msg": "Somethings up with our inputs"})
        return
    }
    if(kidneyID != 1 && kidneyID != 2){
        res.status(400).json({"msg": "Somethings up with our inputs"})
        return
    }
    res.json({
        msg:"your kidney is fine!"
    })
});

app.listen(3000);