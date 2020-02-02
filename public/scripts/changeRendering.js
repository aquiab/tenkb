function changeRendering() {
  var allImages = document.getElementsByClassName('tile')
  var image = document.getElementById('popup-img')
  var checkbox = document.getElementById('render-toggle')
  for (let i = 0; i < allImages.length; i++) {
    allImages[i].classList.toggle('pixelated')
  }
  image.classList.toggle('pixelated')
}