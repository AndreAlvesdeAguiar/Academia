const modalOveralay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for (let card of cards) {
  card.addEventListener('click', function(){
    const courseId = card.getAttribute('id')
    window.location.href = `/courses/${courseId}`
    // modalOveralay.classList.add('active')
    // modalOveralay.querySelector('iframe').src = `https://rocketseat.com.br/${siteId }`
    // modal.classList.remove('maximize')
    // modal.classList.remove('minimize')
    // // modalOveralay.firstElementChild.classList.add('maximize');
    //Esta linha anterior faz o modal abrir maximizado
    })
}

// document.querySelector('.close-modal').addEventListener('click', function(){
//   modalOveralay.classList.remove('active')
//   modalOveralay.getAttribute('iframe').src = "" /* desliga o aúdio quando fechamos o Modal. */
// })

// document.querySelector('.max-modal').addEventListener('click', function(){
//    modal.classList.add('maximize')
//    modal.classList.remove('minimize')
// })
// document.querySelector('.min-modal').addEventListener('click', function(){
//    modal.classList.add('minimize')
//    modal.classList.remove('maximize')
// })