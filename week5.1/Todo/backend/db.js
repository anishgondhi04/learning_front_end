const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://anishgondhi:%3CAnmol%40123%3E@applications.lrc3p.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String, 
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}