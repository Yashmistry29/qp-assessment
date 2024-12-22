const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  items: [
    {
      groceryId: { type: Number, ref: 'Grocery' },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  totalPrice: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
