import { enemyPokemon } from "./enemy/enemy.js"
import { pokemonInicial } from "../invertory/playerInventory.js"
import { healthBar } from "../battle/animation/lifeBar.js"
import { writeChat } from "../function/index.js"
import { lifeBarEnemy, lifeBarName, textChatBattle, MENUBATTLE } from "../utils/index.js"
import { stopButtons, initButtons } from "./index.js"

let damage = 20
let combatStatePlayer = false
let combatStateEnemy = false
let combatState = false
let captureState = false
const timeAwait = 250
const defeat = 0
const arrayCapture = [{ transform: "rotate(0deg)" }, { transform: "rotate(90deg)" }, { transform: "rotate(0deg)" }, { transform: "rotate(-90deg)" }, { transform: "rotate(0deg)" }, { transform: "rotate(90deg)" }, { transform: "rotate(0deg)" }, { transform: "rotate(-90deg)" }, { transform: "rotate(0deg)" },]


/**
 * @param {Bool} state 
 */
const changeCombatState = state => {
    combatState = state
}
/**
 * @param {Bool} state 
 */
const changeCombatStateEnemy = state => {
    combatStateEnemy = state
}
/**
 * @param {Bool} state 
 */
const changeCombatStatePlayer = state => {
    combatStatePlayer = state
}
const changeCaptureState = state => {
    captureState = state
}



const atack = () => {
    stopButtons()
    changeCombatStatePlayer(true)
    let life = enemyPokemon.damage(damage)
    healthBar(lifeBarEnemy, life)
    textMenuBattle()
}


const capture = () => {
    const containerBall = document.getElementById('pokeballBatlleContainer')
    const ball = document.getElementById('pokeballBatlle')
    containerBall.style.display = 'block'


    containerBall.animate([
        { // from
            left: '18%',
            bottom: '23%'
        },
        { // to
            left: '78%',
            bottom: '71%'
        }
    ], {
        duration: 800,
        fill: "forwards"
    })

    ball.animate([
        { transform: "rotate(360deg)" },
    ], {
        duration: 240,
        iterations: Infinity,
        easing: "linear"
    })

    setTimeout(() => {
        containerBall.style.display = 'none'
        containerBall.style.display = 'block'

        changeCaptureState(true)


        containerBall.animate([
            { // from
                left: '78%',
                bottom: '71%'
            },
            { // to
                left: '78%',
                bottom: '62%'
            }
        ], {
            duration: 300,
            fill: "forwards"
        })

        ball.animate(
            arrayCapture,
            {
                duration: 3500,
                fill: "forwards"
            })

        setTimeout(() => {
            textChatBattle.style.zIndex = '9'
            let nameEnemy = enemyPokemon.getName().toUpperCase()
            let text = `${nameEnemy} ha sido capturado!!!,#
                Lo podras encontrar en tu pc.#                         
                Haz click para finalizar el combate...`
            writeChat(textChatBattle, text)
            textChatBattle.addEventListener('click', finishBattle, true)
        }, 3500);


    }, 900);

}




const inventoryBattle = () => {
}

const skipBattle = () => {
    changeCombatState(false)
    MENUBATTLE.style.display = 'none'
    removeTextMenuBattle()
}

const moveEnemy = () => {
    textChatBattle.removeEventListener('click', moveEnemy, true)
    removeTextMenuBattle()
    changeCombatStateEnemy(true)
    setTimeout(() => {
        let life = pokemonInicial.damage(damage)
        healthBar(lifeBarName, life)
        changeCombatStateEnemy(false)
        if (life > defeat) {
            initButtons()
        } else {
            textChatBattle.style.zIndex = '9'
            let namePokemonPlayer = pokemonInicial.getName().toUpperCase()
            let text = `Tu ${namePokemonPlayer} fue debilitado!!!`
            writeChat(textChatBattle, text)
            textChatBattle.addEventListener('click', finishBattle, true)
            // textChatBattle.addEventListener('click', defeatPokemon, true)
        }
    }, timeAwait);

}

const removeTextMenuBattle = () => {
    textChatBattle.style.zIndex = '-9'
    textChatBattle.innerHTML = ''
}

const textMenuBattle = () => {
    textChatBattle.style.zIndex = '9'
    let nameEnemy = enemyPokemon.getName().toUpperCase()
    let namePokemonPlayer = pokemonInicial.getName().toUpperCase()
    let life = enemyPokemon.getHealth()
    if (life > defeat) {
        let text = `Tu ${namePokemonPlayer} del pokemon ataco a ${nameEnemy}!!!,#                         
        Haz click para continuar...`
        writeChat(textChatBattle, text)
        setTimeout(() => {
            changeCombatStatePlayer(false)
            textChatBattle.addEventListener('click', moveEnemy, true)
        }, timeAwait);
    } else {
        let text = ` ${nameEnemy} ha sido derrotado!!!,#
        Haz click para finalizar el combate`
        writeChat(textChatBattle, text)
        setTimeout(() => {
            changeCombatStatePlayer(false)
            textChatBattle.addEventListener('click', finishBattle, true)
        }, timeAwait);
    }
}


const finishBattle = () => {
    textChatBattle.removeEventListener('click', finishBattle, true)
    skipBattle()
}

export {
    combatStatePlayer,
    combatStateEnemy,
    changeCombatState,
    combatState,
    atack,
    capture,
    inventoryBattle,
    skipBattle,
    changeCaptureState,
    captureState
}
