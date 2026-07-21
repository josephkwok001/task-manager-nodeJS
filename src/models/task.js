const mongoose = require("mongoose")
const validator = require("validator")

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api")

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        trim: true,
        required: true
    }, 
    isComplete: {
        type: Boolean,
        default: false
    }, 
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
}, {
    timestamps: true
})

const Task = mongoose.model("Task", taskSchema)

module.exports = Task