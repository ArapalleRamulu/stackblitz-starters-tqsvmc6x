const express = require('express');

const router = express.Router();

const UserController = require('../controllers/userController');

router.get('/', UserController.index);

router.get('/create', UserController.createForm);

router.post('/create', UserController.create);

router.get('/edit/:id', UserController.editForm);

router.post('/update/:id', UserController.update);

router.get('/delete/:id', UserController.delete);

module.exports = router;
