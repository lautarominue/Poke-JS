import { teamPokemons } from "../invertory/playerInventory.js"
import { transitionBlackOut } from "./transitionBlackOut.js"

const cureTeam = () => {
    transitionBlackOut()
    teamPokemons.forEach(pokemon => {
        pokemon.cureTotal()
    });
}

export { cureTeam }