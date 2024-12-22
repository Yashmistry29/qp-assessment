// services/SequenceService.js
const Counter = require('../models/Counter');
const Grocery = require('../models/Grocery');
const Order = require('../models/Order');

const getGrocerySequenceValue = async (sequenceName) => {
  const currentSequence = await Grocery.findOne().sort({ id: -1 }).limit(1);
  var getNextSequenceValue = currentSequence==null?1:currentSequence.id + 1;;
  const counter = await Counter.findByIdAndUpdate(
    sequenceName,
    { $set: { sequenceValue: getNextSequenceValue } }, // Increment the sequence value
    { new: true, upsert: true }    // Create a new counter if it doesn't exist
  );
  return counter.sequenceValue;
};

const getOrderSequenceValue = async (sequenceName) => {
  const currentSequence = await Order.findOne().sort({ id: -1 }).limit(1);
  console.log(currentSequence);
  var getNextSequenceValue = currentSequence==null?1:currentSequence.id + 1;
  const counter = await Counter.findByIdAndUpdate(
    sequenceName,
    { $set: { sequenceValue: getNextSequenceValue } }, // Increment the sequence value
    { new: true, upsert: true }    // Create a new counter if it doesn't exist
  );
  return counter.sequenceValue;
}

module.exports = { getGrocerySequenceValue, getOrderSequenceValue };
