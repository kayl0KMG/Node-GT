//autenticação do login (auth)
const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');


// CRIANDO ROTA LOGIN
router.post('/login', loginController.loginAuth)

module.export = router