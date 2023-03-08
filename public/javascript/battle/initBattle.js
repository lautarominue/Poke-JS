import { createSprite } from "../function/index.js"
import { createPokemonEnemy } from "./battlePokemon.js"
import { lifeBarEnemy, lifeBarName, MENUBATTLE,playerName,enemyName } from "../utils/index.js"
import { initButtons } from "./battleButtons.js"
import { initHealtBar } from "./animation/lifeBar.js"
import { pokemonInicial } from "../invertory/index.js"

let sprite = {}

const initBattle = async () => {
    MENUBATTLE.style.display = 'block'

    
    //-----------Consulta al back
    // const pokemonInit = await fetch('inventarioPokemon')
    const position = { x: 220, y: 210 }
    const size = { x: 450, y: 450 }
    let image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/64.png'
    //-----------fin de la consulta

    sprite = createSprite(image, position, size)

    const enemy = await createPokemonEnemy()

    // actualizo barras de vida

    const fullHealth = 100
    let healthPokemonPlayer = pokemonInicial.getHealth()

    initHealtBar(lifeBarEnemy, fullHealth)
    initHealtBar(lifeBarName, healthPokemonPlayer)

    // inicio botones
    initButtons()

    playerName.innerHTML = pokemonInicial.getName().toUpperCase()
    enemyName.innerHTML = enemy.getName().toUpperCase()


    return true
}

export { initBattle, sprite as spritePlayerPokemon }