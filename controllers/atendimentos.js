const atendimentos = require('../models/atendimentos')
const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, resp) => {
        Atendimento.lista(resp)
    })

    // app.post('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando um POST'))

    app.get('/atendimentos/:id' , (req, resp) => {
        const id = parseInt(req.params.id)

        Atendimento.buscaPorID(id, resp)

    })
    app.post('/atendimentos', (req, resp) => {
        const atendimento = req.body 
        Atendimento.adiciona(atendimento, resp)
        
    })

    app.patch('/atendimentos/:id' , (req, resp) =>{
        const id = parseInt(req.params.id)
        const valores = req.body
        Atendimento.altera(id, valores, resp)
    })

    app.delete('/atendimentos/:id', (req, resp) => {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, resp)

    })

}