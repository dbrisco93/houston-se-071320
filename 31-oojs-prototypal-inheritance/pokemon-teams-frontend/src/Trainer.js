class Trainer {

  constructor(trainer){
    this.id = trainer.id
    this.name = trainer.name
    this.pokemons = trainer.pokemons
    this.element = document.createElement('div')
  }

  renderCard(){
    this.element.className = 'card'
    this.element.dataset.id = this.id

    const trainerName = document.createElement('p')
    trainerName.innerText = this.name

    const addPokemonBtn = document.createElement('button')
    addPokemonBtn.dataset.trainerId = this.id
    addPokemonBtn.innerText = 'Add Pokemon'

    const pokemonList = document.createElement('ul')
    this.pokemons.forEach(pokemon => {
      const pokemonObj = new Pokemon(pokemon)
      const pokemonLi = pokemonObj.renderLi()
      pokemonList.appendChild(pokemonLi)
    })

    this.element.append(trainerName,addPokemonBtn,pokemonList)
    return this.element
  }

}
