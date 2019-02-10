let mongoose = require('mongoose');

//create a model class
let contactSchema = mongoose.Schema({
    name: String,
    description: String,
},
{
    collection: "favouriteThings"
});

module.exports = mongoose.model('Kamal', contactSchema);
