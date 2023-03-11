import { PokemonObject } from "../class/index.js";

const pidgeot = {
    id: 18,
    name: 'pidgeot',
    type: {
        one: 'normal',
        two: 'flying'
    },
    image: {
        thumnail: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/18.png',
        front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
        back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png'
    }
}
const ninetales = {
    id: 38,
    name: 'ninetales',
    type: {
        one: 'fire',
        two: ''
    },
    image: {
        thumnail: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/38.png',
        front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png',
        back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/38.png'
    }
}
const arbok = {
    id: 24,
    name: 'arbok',
    type: {
        one: 'posion',
        two: ''
    },
    image: {
        thumnail: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/24.png',
        front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png',
        back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/24.png'
    }
}
const dragonair = null
const pikachu = null
const nidorino = null


let pokemonOne = pidgeot ? new PokemonObject(pidgeot) : null
let pokemonTwo = ninetales ? new PokemonObject(ninetales) : null
let pokemonThree = arbok ? new PokemonObject(arbok) : null
let pokemonFour = dragonair ? new PokemonObject(dragonair) : null
let pokemonFive = pikachu ? new PokemonObject(pikachu) : null
let pokemonSix = nidorino ? new PokemonObject(nidorino) : null
let teamPokemons = []

pokemonOne ? teamPokemons.push(pokemonOne) : ''
pokemonTwo ? teamPokemons.push(pokemonTwo) : ''
pokemonThree ? teamPokemons.push(pokemonThree) : ''
pokemonFour ? teamPokemons.push(pokemonFour) : ''
pokemonFive ? teamPokemons.push(pokemonFive) : ''
pokemonSix ? teamPokemons.push(pokemonSix) : ''

let pokemonInicial = teamPokemons[0]

const stateHealthPokemonInventory = () => {
    let live = pokemonInicial.getHealth()
    if (live <= 0)
        return false
    return true
}
const changePositionArray = (id) => {
    const pokemon = teamPokemons.splice(id, 1)
    teamPokemons.unshift(pokemon[0])
    pokemonInicial = teamPokemons[0]
}

export { pokemonInicial, stateHealthPokemonInventory, teamPokemons, changePositionArray }