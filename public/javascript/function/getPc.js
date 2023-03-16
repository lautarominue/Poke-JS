import { LOCALHOST,PCURL } from "../utils/index.js"
const getPc = async () => {
    const url = LOCALHOST + PCURL
    let pc = await fetch(url)
    if (pc) {
        pc = pc.json()
        return pc
    } else {
        return false
    }
}

export { getPc }