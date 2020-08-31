const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener('DOMContentLoaded',() => {
  getPokemons()
})

const getPokemons = () => {
  fetch(TRAINERS_URL)
  .then(res => res.json())
  .then(trainers => {
    trainers.forEach(trainer => renderCard(trainer))
  })
}

const removePokemon = (id) => {
  fetch(POKEMONS_URL+`/${id}`, {
    method: 'DELETE'
  }).then(res => res.json())
  .then(console.log)
}

const createPokemon = (parentNode,trainer_id) => {
  fetch(POKEMONS_URL,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ trainer_id: trainer_id })
  }).then(res => res.json())
  .then(newPokemon => {
    const newPokemonLi = addPokemonToList(newPokemon)
    parentNode.querySelector('ul').append(newPokemonLi)
  })
}

const addPokemonToList = (pokemon) => {

  const pokemonItem = document.createElement('li')
  pokemonItem.innerText = `${pokemon.nickname} (${pokemon.species})`

  const releasePokemonBtn = document.createElement('button')
  releasePokemonBtn.className = 'release'
  releasePokemonBtn.dataset.pokemonId = pokemon.id
  releasePokemonBtn.innerText = 'Release'

  releasePokemonBtn.addEventListener('click',(e) => {
    const pokemon_id = e.target.dataset.pokemonId
    removePokemon(pokemon_id)
    e.target.parentElement.remove()
  })

  pokemonItem.appendChild(releasePokemonBtn)
  return pokemonItem
}

const renderCard = (trainer) => {

  const trainerCard = document.createElement('div')
  trainerCard.className = 'card'
  trainerCard.dataset.id = trainer.id

  const trainerName = document.createElement('p')
  trainerName.innerText = trainer.name

  const addPokemonBtn = document.createElement('button')
  addPokemonBtn.dataset.trainerId = trainer.id
  addPokemonBtn.innerText = 'Add Pokemon'

  addPokemonBtn.addEventListener('click', (e) => {
    const trainer_id = e.target.dataset.trainerId
    createPokemon(e.target.parentElement,trainer_id)
  })

  const pokemonList = document.createElement('ul')
  trainer.pokemons.forEach(pokemon => {
    const pokemonItem = addPokemonToList(pokemon)
    pokemonList.appendChild(pokemonItem)
  })

  trainerCard.append(trainerName,addPokemonBtn,pokemonList)
  // trainerCard.appendChild(addPokemonBtn)
  // trainerCard.appendChild(pokemonList)

  document.querySelector('main').append(trainerCard)

}
