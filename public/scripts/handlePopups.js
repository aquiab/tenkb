var popupBox = document.getElementById('popup')
var popupImg = document.getElementById('popup-img')
var popupTxt = document.getElementById('popup-txt')

function handlePopups(url, divId) {
  popupBox.classList.toggle('closed')
  if (url) {
    popupImg.src = url
    popupImg.classList.toggle('closed')
  }
  if (url === null) {
    popupTxt.classList.toggle('closed')
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
        popupTxt.classList.toggle('closed')
      }
    }
  }
}