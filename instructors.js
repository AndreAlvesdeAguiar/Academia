// const fs = require('fs')
// const data = require("./data.json")
// const { age, data_fomato, date } = require('./utils')

// exports.show = function (req, res) {
//     const { id } = req.params

//     const foundInstructor = data.instructors.find(function (instructor) {
//         return instructor.id == id
//     })

//     if (!foundInstructor) return res.send("Instrutor não encontrado!")

//     /* new Intl.DateTimeFormat("pt-BR").format(foundInstructor.created_at)
//     Esse é o codigo para a data que não está funcionando no VSCode, retorna sempre yyyy-mm-dd
//     e não mostra nada além disso mesmo tentando outros idiomas, essa linha vai direto no created_at.
//     */
//     const instructor = {
//         ...foundInstructor,
//         age: age(foundInstructor.birth),
//         services: foundInstructor.services.split(","),
//         created_at: data_fomato(foundInstructor.created_at)
//     }

//     return res.render("instructors/show", { instructor })
// }
// //create
// exports.post = function (req, res) {
//     const keys = Object.keys(req.body)

//     for (key of keys) {
//         if (req.body[key] == "") {
//             return res.send("Por favor, preencha todos os campos!")
//         }
//     }

//     let { avatar_url, name, birth, gender, services } = req.body


//     birth = Date.parse(birth)
//     const created_at = Date.now()
//     const id = Number(data.instructors.length + 1)


//     data.instructors.push({
//         id,
//         avatar_url,
//         name,
//         birth,
//         gender,
//         services,
//         created_at
//     })


//     fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
//         if (err) return res.send("Falha ao gravar o arquivo!!")

//         return res.redirect("/instructors")
//     })

// }

// //editar
// exports.edit = function(req, res) {
//     const { id } = req.params

//     const foundInstructor = data.instructors.find(function (instructor) {
//         return instructor.id == id
//     })

//     if (!foundInstructor) return res.send("Instrutor não encontrado!")

//     const instructor = {
//         ...foundInstructor,
//         birth: date(foundInstructor.birth)
//     }
    

//     return res.render("instructors/edit", { instructor })
// }

// exports.put = function(req, res) {
//     const { id } = req.body
//     let index = 0

//     const foundInstructor = data.instructors.find(function (instructor, foundIndex) {
//         if (id == instructor.id) {
//             index =foundIndex
//             return true
//         }
//     })

//     if (!foundInstructor) return res.send("Instrutor não encontrado!")

//     const instructor = {
//         ...foundInstructor,
//         ...req.body,
//         birth: Date.parse(req.body.birth)
//     }

//     data.instructors[index] = instructor

//     fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
//         if(err) return res.send("Erro ao escrever no arquivo!")

//         return res.redirect(`/instructors/${id}`)
//     })
// }

// exports.delete = function(req, res){
//     const { id } = req.body

//     const filteredInstructors = data.instructors.filter(function(instructor) {
//         return instructor.id != id
//     })

//     data.instructors = filteredInstructors

//     fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
//         if (err) return res.send("Erro ao escrever no arquivo!")

//         return res.redirect("/instructors")
//     })
// }