const express = require('express');
const router = express.Router();
const generalController = require((__dirname, '../controllers/generalControllers.js'))

router.get('/', generalController.home);
router.post('/create',generalController.create)
router.get('/detail/:id',generalController.detail)
router.put('/detail/:id',generalController.upDate)
router.delete('/delete/:id',generalController.delete)
module.exports = router; 