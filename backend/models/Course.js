const mongoose = require('mongoose')

let courseSchema = mongoose.Schema({
    name: String,
    weight: Number,
    images: [String]
})

let CourseModel = mongoose.model('Course', courseSchema)

module.exports = CourseModel;