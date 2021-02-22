const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const studentDetailSchema = new Schema({
  name: { type: String, required: true },
  branch: { type: String, required: true },
  cgpa: { type: Number, required: true },
  userId: { type: mongoose.Types.ObjectId, required: true, ref: 'User' }
});

studentDetailSchema.plugin(uniqueValidator);

module.exports = mongoose.model('StudentDetail', studentDetailSchema);
