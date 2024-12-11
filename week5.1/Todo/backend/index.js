const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json())
app.use(cors())

app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);

    if (!parsePayload.success) {
        res.status(411).json({

            msg: "Please input the wrtie the date in right format"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "todo created"
    })
})

app.get("/todos", async (req, res) => {
    const todos = await todo.find();
    res.json({
        todos
    })

})

app.put("/completed", async (req, res) => {

    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);

    if (!parsePayload.success) {
        res.status(411).json({
            msg: "Please give the write id"
        })
        return;
    }

   await todo.update({
        _id: req.body.id},{
            completed: true
    })

    res.json({
        msg: "marked as completed"
    })

})

app.listen(3000);
