const express = require('express');
const router = express.Router();
const animeController = require('../controllers/animeController');


// ------------------------- ROTA PARA ANIMES (crud) -------------------- //

router.get('/', (req, res) => {
    console.log('API iniciada com sucesso!')
})

//Rota para Visualizar todos os Animes.
router.get('/animes', animeController.getAllAnimes)

//Rota para Visualizar um animes singular, baseado no ID.
router.get('/animes/:id', animeController.getAnimeById)

//Rota para Inserir um novo anime.
router.post('/animes', animeController.createAnime)

//Rota para atualizar um anime existente utilizando o Id como parâmetro.
router.put('/animes/:id', animeController.updateAnime)

router.delete('/animes/:id', animeController.deleteAnimeById);

module.export = router