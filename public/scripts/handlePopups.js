var popupBox = document.getElementById('popup')
var popupImg = document.getElementById('popup-img')

function handlePopups(url, divId) {
  popupImg.src = url
  popupBox.classList.toggle('closed')
  if (url) {
    popupImg.classList.toggle('closed')
  }
  if (url === null) {
    document.getElementById(divId).classList.toggle('closed')
  }
  window.onclick = function (event) {
    if (event.target == popupBox) {
      popupBox.classList.toggle('closed')
      if (url) {
        popupImg.classList.toggle('closed')
      }
      if (url === null) {
        document.getElementById(divId).classList.toggle('closed')
      }
    }
  }
}