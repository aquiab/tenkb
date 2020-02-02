async function getUrls() {
  try {
    let resp = await fetch('/get-urls')
    let data = await resp.json()
    return data
  }
  catch (err) {
    console.log(err)
  }
}

async function mapUrls() {
  let urls = await getUrls()
  let gallery = document.getElementById('gallery')
  for (let i = 0; i < urls.length; i++) {
    gallery.innerHTML += '<div class="tile" onclick="handlePopups(\'' + urls[i] + '\')" style="background-image: url(\'' + urls[i] + '\')"></div>'
  }
}

mapUrls()





