const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()

server.use(express.urlencoded({ extended: true})) // linha responsável por fazer o express entender o que vem dentro do req.body
server.use(express.static('public')) 
server.use(routes)

server.set('view engine', 'njk') 

nunjucks.configure('views', {
express: server,
  noCache: true
}) 


server.listen(3333, function() {
  console.log('servidor em testes')
})

//instalando o Browsersync e npm-run-install
// $npm install browser-sync npm-run-all -D   
