const Grocery = require('../models/Grocery');
const { getGrocerySequenceValue } = require('./SequenceService');

module.exports = {
  async createGrocery(data) {
    const nextId = await getGrocerySequenceValue('Grocery');
    data.id = nextId;
    console.log(data);
    return await Grocery.create(data);
  },
  async getGroceries() {
    return await Grocery.find();
  },
  async updateGrocery(id, updates) {
    console.log(id,updates);
    var resp = await Grocery.updateOne({ id: id }, { $set: updates });
    console.log(resp);
    return resp
  },
  async deleteGrocery(id) {
    return await Grocery.findOneAndDelete({id: id});
  },
  async updateInventory(id, quantity) {
    return await Grocery.updateOne({ id: id }, { $set: { quantity: quantity } });
  },
};