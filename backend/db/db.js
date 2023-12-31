const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mern', {family: 4})
// mongoose.set('useFindAndModify', false);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log(`Database connected`);
})

module.exports = db;