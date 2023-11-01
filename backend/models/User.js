const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    user: String,
    city: String
})

let UserModel = mongoose.model('User', userSchema)

module.exports = UserModel;