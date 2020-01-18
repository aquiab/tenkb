function openBox(url){
  document.getElementById('popup').style.display='block'
  document.getElementById('popup-img').src = url
  document.getElementById('popup-close').onclick = () => {
    document.getElementById('popup').style.display='none'
  }
}