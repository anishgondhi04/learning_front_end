const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json())

app.post("/todo", (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);

    if (!parsePayload.success) {
        res.status(411).json({

            msg: "Please input the wrtie the date in right format"
        })
        return;
    }
})
app.get("/todos", (req, res) => {

})
app.put("/completed", (req, res) => {

   const updatePayload = req.body;
   const parsePayload = updateTodo.safeParse(updatePayload);
   
   if(!parsePayload.success){
    res.status(411).json({
        msg: "Please give the write id"
    })
    return;
   }

})

