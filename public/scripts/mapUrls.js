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
  console.log(urls)
  gallery = document.getElementById('gallery')
  for (i = 0; i < urls.length; i++) {
    gallery.innerHTML += '<div class="tile" style="background-image: url(https://tenkb.s3-sa-east-1.amazonaws.com/' + urls[i] + ')"></div>'
  }
}

mapUrls()





