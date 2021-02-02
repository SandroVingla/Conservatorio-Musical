

const modalOverlay = document.querySelector('.modal_ovelay');
const cards = document.querySelectorAll('.card')

for (let card of cards) {
  const videoId = card.getAttribute("id")
  card.addEventListener("click", function(){
    window.location.href = `/video?id=${videoId}`
  })
}

 