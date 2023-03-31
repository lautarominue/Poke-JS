import { enemyPokemonObject, enemyPokemon } from "../battle/index.js"
import { teamPokemons } from "../invertory/index.js"
import { LOCALHOST } from "../utils/index.js"

const addPokemon = async () => {
    let pc = await fetch(`${LOCALHOST}api/pc`)
        .then((response) => response.json())

    let capturePokemon = enemyPokemonObject
    let teamComplete = true

    teamPokemons.length < 6 ? teamComplete = true : teamComplete = false

    capturePokemon.team = teamComplete

    pc.pokemons.push(capturePokemon)
    let id = pc._id
    const url = `${LOCALHOST}api/pc/${id}`
    const response = await fetch(url, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(pc),
    })

    const MAXTEAM = 6

    if (teamPokemons.length < MAXTEAM) {
        teamPokemons.push(enemyPokemon)
    }
}

export { addPokemon }