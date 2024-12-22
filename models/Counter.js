// models/Counter.js
const mongoose = require('mongoose');

const CounterSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // Name of the collection (e.g., 'Grocery')
  sequenceValue: { type: Number, required: true },
});

module.exports = mongoose.model('Counter', CounterSchema);
