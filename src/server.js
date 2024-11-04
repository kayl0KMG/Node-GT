const app = require('./app')
const {port} = require('./config/dotenvConfig')
// const produtos = require('./src/mocks/sneakerList')
// const sneakerList = require('./mocks/sneakerList')
// const getAllsneakers  = require('./controllers/sneakersController')

  // // CRIANDO ROTA PRODUTOS
  // app.get('/produtos', sneakerList.getAllsneakers) 
  
  
  // SUBINDO O SERVIDOR NA PORTA 3000
  app.listen(PORT, () => {
      console.log(`O servidor está rodando no link -> http://localhost:${port}`)
  })

