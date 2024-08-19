const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/GetAllUsers', userController.GetUsers);
router.get('/GetUserById/:id', authenticateToken, userController.GetUserById);
router.post('/AddUser', userController.CreateUser);
router.put('/UpdateUserById/:id', authenticateToken, userController.UpdateUserById);
router.delete('/DeleteUserById/:id', authenticateToken, userController.DeleteUserById);

module.exports = router;