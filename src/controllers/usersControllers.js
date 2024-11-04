const userCreate = async (req, res, next) => {
    try{
        res.send({
            message: 'Erro ao listar usuarios!'
           })
       

    } catch (error){
        res.send({
            message: 'Erro ao criar usuarios!'
           })
     
    }
}

const userList = async (req, res, next) => {
    try{
        res.send({
            Users: [
                {id: 1, name: 'David'},
                {id: 2, name: 'Maria'},
                {id: 3, name: 'João'},
            ]
           })

    } catch (error){
        res.send({
            message: 'Erro ao listar usuarios!'
           })

    }
}

module.export = {
    userCreate,
    userList
}