const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String
})

//create collection of users
//user collection should follow userschema
//User is called user collects
//Does not represent single user, it is the entire collection
const User = mongoose.model('user', UserSchema)

module.exports = User;

