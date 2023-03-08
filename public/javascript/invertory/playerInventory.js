import { PokemonObject } from "../class/index.js";

let pokemonInicial = new PokemonObject(1,'ALAKAZAM')

const stateHealthPokemonInventory = () =>{
    let live = pokemonInicial.getHealth()
    if(live <= 0)
        return false
    return true
}


export { pokemonInicial, stateHealthPokemonInventory }