const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/GetAllUsers', userController.GetUsers);
router.get('/GetUserById/:id', userController.GetUserById);
router.post('/AddUser', userController.CreateUser);
router.put('/UpdateUserById/:id', userController.UpdateUser);
router.delete('/DeleteUserById/:id', userController.DeleteUser);

module.exports = router;