import { writeChat } from "../../function/writeChat.js"
import { changeStateInteraction } from "../../interaction/stateInteraction.js"
import { urlFaceset } from "../../utils/index.js"

/**
 * Print a new Dialog
 * @param {object} data {faceset,chat}  
 */
const printDialogTutorial = ({faceset,chat}) => {
    const screenDialog = document.getElementById('dialog')
    const screenChat = document.getElementById('dialogChat')
    const screenDialogFaceset = document.getElementById('dialogFaceset')
    
    screenDialogFaceset.style.backgroundImage = `url(${urlFaceset}${faceset})`
    writeChat(screenChat,chat)
    screenDialog.style.display = 'block'
    screenChat.style.display = 'block'
    screenDialogFaceset.style.display = 'block'
}

export { printDialogTutorial }