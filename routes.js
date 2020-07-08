const express = require('express')
const routes = express.Router()
const teachers = require('./teachers')

//Criando três rotas para testes iniciais.

routes.get('/', function(req, res) {
  return res.redirect('/teachers')
} )

routes.get('/teachers', function(req, res) {
  return res.render('teachers/index')
} )

routes.get('/teachers/create', function(req, res){
  return res.render ('teachers/create')
})

//Mostrando um recurso através de um :id
routes.get('/teachers/:id', teachers.show)

routes.get('/teachers/:id/edit', teachers.edit)


routes.post('/teachers', teachers.post )
  //req.query; req.body => transferir dados do front para o backend.
  //Preciso configurar o express para ler os dados vindos no body
  //Precisamos validadar os dados
  // Constructor é uma função que vai criar um objeto
  //const keys = Object.keys(req.body) //ajudará a validar todos os campos, não confunda os "keys"
  //retornará um array com as chaves

  // for (key of keys) {
    //req.body.avatar_url => esta linha é igual ao res.send logo abaixo
  //   if (req.body[key] == "") {
  //     return res.send('Por favor, preencha todos os campos.')
  //   }
  // }

  // a const key e o FOR são uma estrutura de validação

//   return res.send(req.body)
// })

routes.get('/students', function(req, res) {
  return res.send('students')
} )

module.exports = routes