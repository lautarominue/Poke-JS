import { battleBackground } from "../battle/index.js"
import { spriteEnemy, spritePlayerPokemon,combatStateEnemy,combatStatePlayer,combatState,captureState } from "../battle/index.js"
import { changeAnimation } from "./changeAnimation.js"


const atackEnemy = 'enemy'
const atackPlayer = 'player'
const town = 220

const animateBattle = () => {
    const animationId = window.requestAnimationFrame(animateBattle)
    battleBackground.draw()
    spritePlayerPokemon.draw()
    if(!captureState)
        spriteEnemy.draw()

    combatStatePlayer ? spritePlayerPokemon.moveAtack(atackEnemy) : spritePlayerPokemon.finalMoveAtack(atackEnemy)

    combatStateEnemy ? spriteEnemy.moveAtack(atackPlayer) : spriteEnemy.finalMoveAtack(atackPlayer)  

    if(!combatState){
        window.cancelAnimationFrame(animationId)
        changeAnimation(town)
    }
}

export { animateBattle }