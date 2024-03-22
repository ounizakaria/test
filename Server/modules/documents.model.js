const mongoose = require('mongoose');

const DocumentSchema = mongoose.Schema({
    fileName: String,
    filePath: String
});

module.exports = mongoose.model('Document', DocumentSchema);