import { configBtn, configDialog, configNo, configYes, displayBLOCK, displayNONE, LOCALHOST } from "../utils/index.js"

const initConfig = () => {
    configBtn.addEventListener('click', openConfig, true)
}


const openConfig = () => {
    configBtn.removeEventListener('click', openConfig, true)
    configDialog.style.display = displayBLOCK
    configNo.addEventListener('click', closeConfig, true)
    configYes.addEventListener('click', logout, true)
}

const closeConfig = () => {
    configNo.removeEventListener('click', closeConfig, true)
    configBtn.addEventListener('click', openConfig, true)
    configDialog.style.display = displayNONE
}

const logout = () => {
    const url = LOCALHOST + 'logout'
    fetch(url)
}


export { openConfig, initConfig }