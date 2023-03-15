import { enemyPokemonObject,enemyPokemon } from "../battle/index.js"
import { teamPokemons } from "../invertory/index.js"

const addPokemon = async () => {
    let pc = await fetch(`http://localhost:3040/api/pc`)
        .then((response) => response.json())
    pc.pokemons.push(enemyPokemonObject)
    let id = pc._id
    const url = `http://localhost:3040/api/pc/${id}`
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