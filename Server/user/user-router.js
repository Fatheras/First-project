const express = require('express');
const router = express.Router();
const UserController = require('./user-controller');

const handleErrorAsync = func => async (req, res, next) => {
  try {
    await func(req, res, next);
  } catch (error) {
    next(error);
  }
};

router.get('/', UserController.getAllUsers);

router.get('/:id', UserController.getUser);

router.delete('/:id', UserController.deleteUser);

router.post('/', UserController.createUser);

router.put('/:id', handleErrorAsync(UserController.createUser));

module.exports = router; 