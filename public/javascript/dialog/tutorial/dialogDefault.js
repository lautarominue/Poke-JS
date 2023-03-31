import { writeChat } from "../../function/writeChat.js"
import { removeInteraction } from "../../interaction/index.js"
import { urlFaceset } from "../../utils/index.js"
let state = 0
/**
 * Print a new Dialog
 * @param {object} data {faceset,chat}  
 */
const printDialogTutorial = ({ faceset, chat }) => {
    const screenDialog = document.getElementById('dialog')
    const screenChat = document.getElementById('dialogChat')
    const screenDialogFaceset = document.getElementById('dialogFaceset')

    screenDialogFaceset.style.backgroundImage = `url(${urlFaceset}${faceset})`
    writeChat(screenChat, chat)
    screenDialog.style.display = 'block'
    screenChat.style.display = 'block'
    screenDialogFaceset.style.display = 'block'
}

const statePrintDeathPokemon = () => {
    state++
    if(state === 1){
        const faceset = 'facesetAdmin.png'
        const chat = 'Debes cambiar tu primer pokemon si este se encuentra debilitado'
        printDialogTutorial({faceset,chat})

        setTimeout(()=>{
            removeInteraction()
        },4000)

    }
}

export { printDialogTutorial,statePrintDeathPokemon }