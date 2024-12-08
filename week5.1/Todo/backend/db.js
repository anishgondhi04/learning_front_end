const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://anishgondhi:Anmol%40123@test01.blbvt.mongodb.net/todo");

const todoSchema = mongoose.Schema({
    title: String,
    description: String, 
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}