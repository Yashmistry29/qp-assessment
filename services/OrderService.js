const Grocery = require('../models/Grocery');
const Order = require('../models/Order');
const { getOrderSequenceValue } = require('./SequenceService');

module.exports = {
  async createOrder(orderData) {
    let totalPrice = 0;
    for (const item of orderData.items) {
      console.log(item.name);
      var grocery = await Grocery.findOne({ 'name': { $regex: new RegExp(item.name, 'i') } });
      // console.log(grocery);
      if (!grocery || grocery.quantity < item.quantity) {
        throw new Error(`Insufficient stock for ${grocery.name}`);
      }
      item.groceryId = grocery.id;
      grocery.quantity -= item.quantity;
      await grocery.save();
      item.price = grocery.price * item.quantity;
      totalPrice += item.price;
    }
    const nextId = await getOrderSequenceValue('Order');
    var data = {
      id: nextId,
      ...orderData,
      totalPrice
    }
    console.log(data);
    return await Order.create(data);
  },
};