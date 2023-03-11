
// URLs
const URLMAPS = '../img/maps/'
const urlFaceset = '../img/asset/faceset/'
const URLPLAYER = '../img/asset/player/'

export {
    URLPLAYER,
    URLMAPS,
    urlFaceset
}

//get IDs

const menuBattle = document.getElementById('battle')
const playerName = document.getElementById('battle-name-player')
const enemyName = document.getElementById('battle-name-enemy')
const textChatBattle = document.getElementById('battleText')
const btnAtack = document.getElementById('btn-atackOne')
const btnCapture = document.getElementById('btn-capture')
const btnInventario = document.getElementById('btn-inventory')
const btnSkip = document.getElementById('btn-skip')

export {
    menuBattle,
    playerName,
    enemyName,
    textChatBattle,
    btnAtack,
    btnCapture,
    btnInventario,
    btnSkip
}

// get Clases

const lifeBarPokemonPlayer = document.querySelector('.battleContainer__player__health__bar')
const lifeBarEnemy = document.querySelector('.battleContainer__enemy__health__bar')
const backBtn = document.querySelector('.inventory__back')

export {
    backBtn,
    lifeBarEnemy,
    lifeBarPokemonPlayer
}

// Constantes

const displayNONE = 'none'
const displayFLEX = 'flex'
const displayBLOCK = 'block'
const DEFEAT = 0
const VOIDTEXT = ''
const BR = `<br>`

export {
    displayBLOCK,
    displayFLEX,
    displayNONE,
    DEFEAT,
    VOIDTEXT,
    BR
}
