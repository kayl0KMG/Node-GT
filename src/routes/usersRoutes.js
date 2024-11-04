//autenticação do login (auth)
const express = require('express');
const router = express.Router();
const usersControllers= require('../controllers/usersControllers');


// CRIANDO ROTA LOGIN
router.post('/create', usersControllers.userCreate);
router.get('/list', usersControllers.userList);

module.export = router;