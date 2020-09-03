class Pokemon {
  constructor(pokemon){
    this.id = pokemon.id
    this.species = pokemon.species
    this.nickname = pokemon.nickname
    this.trainer_id = pokemon.trainer_id
    this.element = document.createElement('li')
  }

  renderLi(){
    this.element.innerText = `${this.nickname} (${this.species})`

    const releasePokemonBtn = document.createElement('button')
    releasePokemonBtn.className = 'release'
    releasePokemonBtn.dataset.pokemonId = this.id
    releasePokemonBtn.innerText = 'Release'

    this.element.appendChild(releasePokemonBtn)
    return this.element
  }
}
