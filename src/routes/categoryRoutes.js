const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Routes for category management
router.get('/', categoryController.getAllCategories);
router.post('/add', categoryController.addCategory);
router.put('/edit/:id', categoryController.editCategory);
router.delete('/delete/:id', categoryController.deleteCategory);

module.exports = router;
