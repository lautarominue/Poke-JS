import { VOIDTEXT,BR } from "../utils/index.js"
let txt = VOIDTEXT
let paper = VOIDTEXT
const speedWrite = 30
let i = 0
const characterSpeciale = '#'
const writeChat = (id, text) => {
    id.innerHTML = VOIDTEXT
    txt = text
    paper = id
    i = 0
    write()
}

function write() {
    if (i < txt.length) {
        if (txt.charAt(i) === characterSpeciale) {
            paper.innerHTML += BR;
        } else {
            paper.innerHTML += txt.charAt(i);
        }
        i++;
        setTimeout(write, speedWrite);
    }
    if (i == txt.length) {
        i = 0
        txt = VOIDTEXT
        paper = VOIDTEXT
    }
}
const resetWrite = () => i = 0


export { writeChat, resetWrite }
