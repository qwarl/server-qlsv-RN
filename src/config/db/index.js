// Using Node.js `require()`
const mongoose = require('mongoose');
//connect to mongodb
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/server-qlsv-RN', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Mongoose Connection is successfully!!!');
    } catch (error) {
        console.log('Mongoose Connection is failure!!!');

    }
}

module.exports = { connect };