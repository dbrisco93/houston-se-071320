document.addEventListener('DOMContentLoaded',() => {
  init()
})

const init = () => {

  getDogs().then(pups => {
    pups.forEach(pup => renderDogTile(pup))
  })

  const filterBtn = document.querySelector('#good-dog-filter')
  filterBtn.addEventListener('click',filterPups)
}

const filterPups = (e) => {
  const dogBar = document.querySelector('#dog-bar')
  dogBar.innerHTML = ''

  getDogs()
  .then(pups => {
    const filter = e.target.innerText === "Filter good dogs: OFF" ? false : true
    e.target.innerText = !filter ? "Filter good dogs: ON" : "Filter good dogs: OFF"

    const goodPups = pups.filter(pup => pup.isGoodDog)
    const renderPup = !filter ? goodPups : pups

    renderPup.forEach(pup => renderDogTile(pup))
  })
}

const getDogs = () => {
  return fetch('http://localhost:3000/pups')
  .then(res => res.json())
}

const pupInfo = (pupId) => {
  fetch(`http://localhost:3000/pups/${pupId}`)
  .then(res => res.json())
  .then(pup => renderPupInfo(pup))
}

const togglePup = (pupId,goodOrBad) => {
  fetch(`http://localhost:3000/pups/${pupId}`,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ isGoodDog: goodOrBad })
  })
  .then(res => res.json())
  .then(pup => console.log(pup))
}

const renderPupInfo = (pup) => {
  const pupImg = document.createElement('img')
  pupImg.src = pup.image

  const pupName = document.createElement('h2')
  pupName.innerText = pup.name

  const pupGoodDog = document.createElement('button')
  pupGoodDog.innerText = pup.isGoodDog ? 'Good Dog' : 'Bad Dog'

  pupGoodDog.addEventListener('click', (e) => {
      e.target.innerText = !pup.isGoodDog ? 'Good Dog' : 'Bad Dog'
      togglePup(pup.id,!pup.isGoodDog)
  })

  const pupInfoDiv = document.querySelector('#dog-info')
  pupInfoDiv.innerHTML = ''
  pupInfoDiv.append(pupImg,pupName,pupGoodDog)
}

const renderDogTile = (pup) => {
  const dogBar = document.querySelector('#dog-bar')

  const dogTile = document.createElement('span')
  dogTile.innerText = pup.name
  dogTile.dataset.pupId = pup.id

  dogTile.addEventListener('click',(e) =>{
    const pupId = e.target.dataset.pupId
    pupInfo(pupId)
  })

  dogBar.appendChild(dogTile)
}
