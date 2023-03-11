import { printDialogTutorial } from "../dialog/index.js"


const interactionAdmin = chat => {
    let data = {
        faceset: 'facesetAdmin.png',
        chat:chat
    }
    printDialogTutorial(data)
}

export { interactionAdmin }