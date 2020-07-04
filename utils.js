// module.exports = {
//     age: function (timestamp) {
//         const today = new Date()
//         const birthDate = new Date(timestamp)

//         let age = today.getFullYear() - birthDate.getFullYear()
//         const month = today.getMonth() - birthDate.getMonth()

//         if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
//             age = age - 1
//         }

//         return age
//     },

//     date: function(timestamp){
//         const date = new Date(timestamp)

//         const year = date.getUTCFullYear()
//         const month = `0${date.getUTCMonth() + 1}`.slice(-2)
//         const day = `0${date.getUTCDate()}`.slice(-2)

//         return `${year}-${month}-${day}`
//     },

//     /*
//     função criada para formatar a hora para o padrão Brasileiro, por algum motivo a data está saindo apenas em formato
//     americano ano-mês-dia, depois de algumas horas de pesquisa não encontrei a solução, e mesmo criando um novo projeto com
//     apenas o codigo para gerar a data ela ainda saia em formato citado, mesmo quando usado o DateTimeFormat em outras variações
//     o scrip sempre forçava a voltar a esse formato, no final deve ser alguma configuração ou algo mais avançado no node.js
//     a qual ainda não sei. Fica assim para a posteridade arrumar essa parte.
//     */
//     data_fomato: function (dataCriacao) {
//         const dataRecebida = new Date(dataCriacao)

//         const ano = dataRecebida.getUTCFullYear()
//         const mes = `0${dataRecebida.getUTCMonth() + 1}`.slice(-2)
//         const dia = `0${dataRecebida.getUTCDate()}`.slice(-2)

//         const dataSaida = `${dia}/${mes}/${ano}`

//         return dataSaida
//     }
// }