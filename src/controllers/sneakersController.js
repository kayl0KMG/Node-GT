const listaSapatos = require('../mocks/sneakerList')

function getAllsneakers (req, res) {
    try {
      const token = req.query.token
      const jwt = require('jsonwebtoken')
      const decoded = jwt.verify(token, 'akdjflnkadgp')
  
      if (decoded){
        res.send({
          sucess: true,
          message: 'Lista carregada com sucesso!',
          products: []
        })
      } else {
        res.send({
          sucess: false,
          message: 'Token inválido!',
          products: []
        })
      }
    } catch (error){
      res.send({
        sucess: false,
        message: `Falha na requisição ${error}`,
        products: []
      })
    }
  }

  module.export = {
    getAllsneakers,
    listaSapatos
  }