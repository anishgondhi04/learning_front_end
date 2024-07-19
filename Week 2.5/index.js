const express = require("express")
const app = express();

var users = [{
    name: "john",
    kidneys: [{
        healthy: false
    }]

}];

app.get("/", function (req, res) {
    // write logic
    const johnkidneys = users[0].kidneys;
    const numberOfKidneys = johnkidneys.length;

    let numbeOfHealthyKidneys = 0;
    for (let index = 0; index < numberOfKidneys; index++) {
        if (johnkidneys[index].healthy) {
            numbeOfHealthyKidneys += 1;
        }

    }
    const numbeOfUnHealthyKidneys = numberOfKidneys - numbeOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numbeOfHealthyKidneys,
        numbeOfUnHealthyKidneys
    })
})

app.use(express.json());

app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({})
})

app.delete("/", function (req, res) {
    const newkidneys = [];
    for (let index = 0; index < users[0].kidneys.length; index++) {
        if (users[0].kidneys[index].healthy == true) {
            newkidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newkidneys;
    res.json({ msg: "Done!" })
})
app.listen(3000)