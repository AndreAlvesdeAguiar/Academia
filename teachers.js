//Como o arquivo de rotas está ficando muit grande devido funções de validação, por exemplo. Criamos este arquivo para exportar funções de 'create', 'update' e 'delete'por exmplo.
//Normalmente usamos o:
// module.exports = var, [], {}, function

const fs = require('fs') //(1)
const data = require('./data.json') //(2)
const {age} = require('./utils')
const Intl = require('intl')

//show (mostrar)
exports.show = function(req, res) {
  //req.query, req.body, req.params.id = /:id/:member
  const { id } = req.params //desestruturo o req.params

  const foundTeacher = data.teachers.find(function(teacher) { // o find retorna true ou false
    return teacher.id == id
  })
    
  if (!foundTeacher) return res.send('Professor não localizado')
  
 
  
  const teacher = {
    ...foundTeacher,
    birth: age(foundTeacher.birth),
    services: foundTeacher.services.split(','),
    created_at: Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at)
  }

  
  return res.render('teachers/show', {teacher})
}


//create
exports.post = function(req, res) {
  const keys = Object.keys(req.body)// O constructor Object irá pegar as chaves do objetos
  // do rq.body

  for (key of keys) {
    if (req.body[key] == "") {
      return res.send('Por favor, preencha todos os campos.')
    }
  }
  
  //O que vem dentro do req.body? Por isso desestruturamos o req.body.
  let  {avatar_url, name, birth, instrucao, kind, services} = req.body
  
  birth = Date.parse(req.body.birth)
  // na hora da criação do usuário teacher, usaremos o Constructor Date para anexar
  //a data ao req.body

  const created_at = Date.now

  //criando um id para cada objeto do array dentro de data.json.
  const id=Number(data.teachers.length + 1)



  //Observe que toda vez sobrescrevemos os dados do objeto no data.json
  //então criaremos uma chave chamada teachers dentro do data.json gerando um array(2)
  //data.teachers.push(req.body) // adcionamos objetos dentro do array
  data.teachers.push({ //depois de desestruturar, alteramos o data.teachers.push
    id,
    avatar_url,
    name,
    birth,
    instrucao,
    kind,
    services,
    created_at,
  })
  
  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
    if (err) return res.send('Write file error')
    return res.redirect('/teachers')
  } ) // perceba que estamos criando na raiz do projeto um arquivo data que armazenará os dados vindos do Front, mas temos que converter em notação JSON através de um constructor JSON e por fim usamos uma CAllBACK function para não bloquear a aplicação. 
  //Formatar as visualizações no dta.json stringifi

  // return res.send(req.body)
}

//como guardar a informação que vem do body?
// usamos a lib 'fs' - filesystem do Node (1)

//edit
exports.edit = function(req, res){
   
   const { id } = req.params //desestruturo o req.params

   const foundTeacher = data.teachers.find(function(teacher) { // o find retorna true ou false
     return teacher.id == id
   })
     
   if (!foundTeacher) return res.send('Professor não localizado')
   
  
  return res.render('teachers/edit', {teacher: foundTeacher})
}