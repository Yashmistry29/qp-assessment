const GroceryService = require('../services/GroceryService');
const OrderService = require('../services/OrderService');

module.exports = {
  async getGroceries(req, res) {
    try {
      const groceries = await GroceryService.getGroceries();
      res.json(groceries);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async placeOrder(req, res) {
    try {
      const order = await OrderService.createOrder(req.body);
      res.status(201).json({ message: 'Order placed successfully', order });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};