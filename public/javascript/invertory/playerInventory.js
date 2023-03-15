import { PokemonObject } from "../class/index.js";

let teamPokemons = []
let pcPokemon = []
let pokemonInicial = teamPokemons[0]

const getPc = async () => {
    let pc = await fetch('http://localhost:3040/api/pc')
    if (pc) {
        pc = pc.json()
        return pc
    } else {
        return false
    }
}

const getUser = async () => {
    let user = await fetch('http://localhost:3040/user')
    if (user) {
        user = user.json()
        return user
    } else {
        return false
    }
}

const createPc = async () => {
    console.log('createPc')
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
                image: {
                    thumnail: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/18.png",
                    front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
                    back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png"
                }
            }
        ]
    }
    const url = `http://localhost:3040/api/pc`
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
    pc.error ? createPc() : actTeamAndPc(pc)
}

const actTeamAndPc = pc => {
    const MAXTEAM = 6

    pc.pokemons.forEach((pokemon, index) => {
        index <= MAXTEAM
            ? teamPokemons.push(new PokemonObject(pokemon))
            : pcPokemon.push(pokemon)
    })
    pokemonInicial = teamPokemons[0]
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

export { pokemonInicial, stateHealthPokemonInventory, teamPokemons, changePositionArray, getInventory }