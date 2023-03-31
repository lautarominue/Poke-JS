import { PokemonObject } from "../class/index.js";
import { getUser, getPc } from "../function/index.js";
import { LOCALHOST, PCURL, MAXTEAM } from "../utils/index.js";

let teamPokemons = []
let pcPokemon = []
let pokemonInicial = teamPokemons[0]

const createPc = async () => {
    const user = await getUser()
    const idUser = user.idUser
    let newPc = {
        idUser: idUser,
        pokemons: [
            {
                name: "pidgeot",
                idPokedex: 18,
                types: {
                    one: "normal",
                    two: "flying"
                },
                team: true,
                image: {
                    thumnail: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/18.png",
                    front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
                    back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png"
                }
            }
        ]
    }
    const url = LOCALHOST + PCURL
    let pc = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(newPc),
    })
    getInventory()
}

const getInventory = async () => {
    teamPokemons = []
    let pc = await getPc()
    pc.error ? createPc() : actTeamAndPc(pc.pokemons)
}

const actTeamAndPc = pokemons => {
    teamPokemons = []
    pokemons.forEach((pokemon, index) => {
        pokemon.team
            ? teamPokemons.push(new PokemonObject(pokemon))
            : pcPokemon.push(pokemon)
    })
    let vivo = false
    
    pokemonInicial = teamPokemons[0]
    return true
}

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

const removePokemonTeam = positon => {

}

export { pokemonInicial, stateHealthPokemonInventory, teamPokemons, changePositionArray, getInventory,actTeamAndPc }