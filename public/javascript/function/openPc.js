import { teamPokemons } from "../invertory/playerInventory.js"
import { displayFLEX, displayNONE, pcBackBtn, pcHtml, slotPc, slotPcTeam } from "../utils/index.js"
import { getPc } from "./getPc.js"

let stateOpenPc = false
const changeOpenPc = state => stateOpenPc = state

const openPc = () => {
    changeOpenPc(true)
    pcInit()
    pcHtml.style.display = displayFLEX
    pcBackBtn.addEventListener('click', closePc, true)
}

const closePc = () => {
    pcBackBtn.removeEventListener('click', closePc, true)
    changeOpenPc(false)
    pcHtml.style.display = displayNONE
}

const pcInit = async () => {
    let pc = await getPc()
    setTimeout(() => {

        pc.pokemons.forEach((pokemon, index) => {
            let inTeam = false
            teamPokemons.forEach(pokemonTeam => pokemon._id == pokemonTeam.getObjectId() ? inTeam = true : '')
            let { name, image, _id } = pokemon

            if (inTeam) {
                // imprimo html de mi equipo
                let htmlSlot = `<div class="pc__container__slots__left__ind" id="${_id}">
                <div class="pc__container__slots__left__ind__left" id="slot-left-${_id}">
                <div class="pc__container__slots__left__ind__left__img" id="slot-divimg-${_id}">
                <img src="${image.thumnail}" alt="thumnail" id="slot-img-${_id}">
                </div>
                <span id="slot-name-${_id}">${name}</span>
                </div>
                </div>`
                slotPcTeam.innerHTML += htmlSlot
            } else {
                // imprimo html de mi pc
                let htmlSlot = `<div class="pc__container__slots__left__ind" id="${_id}">
                <div class="pc__container__slots__left__ind__left" id="slot-left-${_id}">
                <div class="pc__container__slots__left__ind__left__img" id="slot-divimg-${_id}">
                <img src="${image.thumnail}" alt="thumnail" id="slot-img-${_id}">
                </div>
                <span id="slot-name-${_id}">${name}</span>
                </div>
                </div>`

                slotPc.innerHTML += htmlSlot
            }

        })
        createButtons(movePokemon, pc.pokemons, false)
    }, 3000);
}

const createButtons = (typeFunction, array, remove) => {
    array.forEach(element => {
        const { _id } = element
        if (!remove) {
            document.getElementById(_id).addEventListener('click', typeFunction, true)
        } else {
            document.getElementById(_id).removeEventListener('click', typeFunction, true)
        }
    })
}

const movePokemon = async (event) => {
    let positionArray = event.explicitOriginalTarget.id.split(displayNONE)
    let positionArrayCount = positionArray.length
    let number = parseInt(positionArrayCount) - 24
    let id = displayNONE
    for (let index = number; index < positionArrayCount; index++) {
        const element = positionArray[index];
        id += element
    }
    let pc = await getPc()
    createButtons(movePokemon, pc.pokemons, true)

    console.log(id)

    // si el id esta en el team enviar a la pc
    // sino enviar a al id 
    // condicion si el team es 6 no mandar nada  
}


export { openPc }