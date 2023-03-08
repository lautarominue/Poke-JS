/**
 * Activar la batalla  
 * @returns {boolean}
 */
const randomBattle = () => {
    const number = Math.floor(Math.random() * 1000)
    const max = 12
    if (number < max)
        return true
    return false
}

export { randomBattle }