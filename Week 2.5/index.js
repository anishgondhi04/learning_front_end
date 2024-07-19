const express = require("express")
const app = express();

var users = [{
    name:"john",
    kidneys: [{
        healthy: false
    }]

}];

app.get("/",function(req,res){
    // write logic
    const johnkidneys = users[0].kidneys;
    const numberOfKidneys = johnkidneys.length;

    let numbeOfHealthyKidneys = 0;
    for (let index = 0; index < numberOfKidneys; index++) {
        if(johnkidneys[index].healthy){
            numbeOfHealthyKidneys += 1;
        }
        
    }
    const numbeOfUnHealthyKidneys = numberOfKidneys - numbeOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numbeOfHealthyKidneys,
        numbeOfUnHealthyKidneys
    })
});

app.listen(3000)