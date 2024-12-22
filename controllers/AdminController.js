const GroceryService = require('../services/GroceryService');

module.exports = {
  async addGrocery(req, res) {
    try {
      const grocery = await GroceryService.createGrocery(req.body);
      res.status(201).json({ message: 'Grocery item added successfully', grocery });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getGroceries(req, res) {
    try {
      const groceries = await GroceryService.getGroceries();
      res.json(groceries);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async updateGrocery(req, res) {
    try {
      console.log(req.body);
      const grocery = await GroceryService.updateGrocery(req.params.id, req.body);
      if (!grocery) return res.status(404).json({ message: 'Grocery not found' });
      res.json({ message: 'Grocery updated successfully', grocery });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async deleteGrocery(req, res) {
    try {
      const grocery = await GroceryService.deleteGrocery(req.params.id);
      if (!grocery) return res.status(404).json({ message: 'Grocery not found' });
      res.json({ message: 'Grocery removed successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async updateInventory(req, res) {
    try {
      const grocery = await GroceryService.updateInventory(req.params.id, req.body.quantity);
      if (!grocery) return res.status(404).json({ message: 'Grocery not found' });
      res.json({ message: 'Inventory updated successfully', grocery });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
