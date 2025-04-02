const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    contact: Number,
    rank: String,
    
    token: Number,
});

module.exports = mongoose.model('Admin', adminSchema);