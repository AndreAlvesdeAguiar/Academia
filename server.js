// Criando o servidor

const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./routes")

const server = express()

// Fim criando o servidor 

// indicando para utilizar os arquivos na pasta public
server.use(express.static('public'))

// indicando para utilizar o arq routes
server.use(routes)

// configuração da view engine
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})
// fim configuração view engine

//informa a porta que o servidor fica ouvindo e o coloca online

server.listen(5050, function(){
    console.log("Server is running")
})


