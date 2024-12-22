const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/groceries', UserController.getGroceries);
router.post('/placeOrder', UserController.placeOrder);

module.exports = router;