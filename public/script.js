

const modalOverlay = document.querySelector('.modal_ovelay');
const cards = document.querySelectorAll('.card')

for (let card of cards) {
  const videoId = card.getAttribute("id")
  card.addEventListener("click", function(){
    modalOverlay.classList.add("active")
    modalOverlay.querySelector("iframe").src = (`https://youtube.com/embed/${videoId}`)
  })
}

document.querySelector(".close-modal").addEventListener("click", function(){
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector("iframe").src = ""
})