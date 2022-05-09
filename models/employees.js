const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    created_at:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Employee', employeeSchema);
