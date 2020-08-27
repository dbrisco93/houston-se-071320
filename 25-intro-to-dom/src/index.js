let header = document.querySelector('span').querySelector('h1')
header.innerText = '🔥 Memesssss'


dankMemes.forEach(function (item){
  // Create an image tag
  const imgTag = document.createElement('img')

  // Change the source
  imgTag.src = item

  // ✋🏻 on the DOM
  const imageContainer = document.querySelector('#sometext')
  imageContainer.appendChild(imgTag)
})


let removeDiv = document.querySelector('#removethis')
removeDiv.remove()
