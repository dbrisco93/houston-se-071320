const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener('DOMContentLoaded',() => {
  getPokemons()
  .then(trainers => handleTrainers(trainers))
})

const handleTrainers = (trainers) => {
  trainers.forEach(trainer => {
    const card = renderUI(trainer)
    document.querySelector('main').append(card)
  })
}

const renderUI = (trainer) => {
  const trainerObj = new Trainer(trainer)
  const trainerCard = trainerObj.renderCard()
  return trainerCard
}

const getPokemons = () => {
  return fetch(TRAINERS_URL)
  .then(res => res.json())
}
