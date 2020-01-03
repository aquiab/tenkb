import { getSignedRequest } from './getSignedRequest'

(() => {
  document.getElementById("file-input").onchange = () => {
    const files = document.getElementById('file-input').files
    const file = files[0]
    if(file == null){
      return alert('No file selected.')
    }
    getSignedRequest(file)
  }
})()
