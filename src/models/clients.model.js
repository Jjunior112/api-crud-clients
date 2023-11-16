const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    since: {
        type: String,
        required: true,
    }

})

const ClientModel = mongoose.model('Clients', clientSchema);

module.exports = ClientModel
