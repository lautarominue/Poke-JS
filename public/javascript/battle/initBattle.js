import { createPokemonEnemy } from "./battlePokemon.js"
import { lifeBarEnemy, lifeBarPokemonPlayer, menuBattle, playerName, enemyName,displayBLOCK } from "../utils/index.js"
import { initButtons } from "./battleButtons.js"
import { initHealtBar } from "./animation/lifeBar.js"
import { pokemonInicial } from "../invertory/index.js"

let sprite = {}

const initBattle = async () => {
    // muestro el menu
    menuBattle.style.display = displayBLOCK

    // defino posisiones de pokemon del juegador
    const position = { x: 220, y: 210 }
    const size = { x: 450, y: 450 }

    sprite = pokemonInicial.createSprite(position, size, false)

    const enemy = await createPokemonEnemy()
    
    // actualizo barras de vida
    
    const fullHealth = 100
    let healthPokemonPlayer = pokemonInicial.getHealth()

    initHealtBar(lifeBarEnemy, fullHealth)
    initHealtBar(lifeBarPokemonPlayer, healthPokemonPlayer)

    // inicio botones
    initButtons()

    playerName.innerHTML = pokemonInicial.getName().toUpperCase()
    enemyName.innerHTML = enemy.getName().toUpperCase()


    return true
}

const changeSprite = newSprite =>{
        sprite = newSprite
}

export { initBattle, sprite as spritePlayerPokemon, changeSprite }