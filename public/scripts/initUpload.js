import { getSignedRequest } from './getSignedRequest.js'

(() => {
  document.getElementById("file-input").onchange = () => {
    if (window.FileReader && window.Blob) {
      const files = document.getElementById('file-input').files
      const file = files[0]
      if (file.size >= 10000) {
        return alert("File is too big: " + file.size + " bytes, should be under 10000.")
      }
      let fr = new FileReader()
      fr.onloadend = e => {
        let arr = (new Uint8Array(e.target.result)).subarray(0, 4)
        let header = ""
        for (let i = 0; i < arr.length; i++) {
          header += arr[i].toString(16)
        }
        // checking for img headers (.png, .jpg, .gif, .ico)
        let signatures = ['47494638', '89504e47', 'ffd8ffe0', 'ffd8ffdb', 'ffd8ffee', 'ffd8ffe1', '00000100']
        for (let i = 0; i < signatures.length; i++) {
          if (header === signatures[i]) {
            getSignedRequest(file)
            return
          }
        }
        return alert("File type isn't supported.")
      }
      fr.readAsArrayBuffer(file.slice(0, 4))
    } else {
      return alert("Browser isn't supported.")
    }
  }
})()
