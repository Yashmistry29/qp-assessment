const express = require('express');
const AdminController = require('../controllers/AdminController');

const router = express.Router();

router.post('/groceries', AdminController.addGrocery);
router.get('/groceries', AdminController.getGroceries);
router.put('/groceries/:id', AdminController.updateGrocery);
router.delete('/groceries/:id', AdminController.deleteGrocery);
router.patch('/groceries/:id/inventory', AdminController.updateInventory);

module.exports=router