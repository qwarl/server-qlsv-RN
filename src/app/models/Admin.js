const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

//create model Admin in mongoose
const Admin = new Schema(
    {
        userName: { type: String },
        password: { type: String },
        fullName: { type: String },
        address: { type: String },
        phoneNumber: { type: String },
        setRoleAccount: { type: String }
    },
    {
        timestamps: true,
    })

module.exports = mongoose.model('Admin', Admin, 'Admin');