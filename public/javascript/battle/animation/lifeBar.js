const color = points => {
    let colorLife = 'green'
    points < 65 ? colorLife = 'yellow' : ''
    points < 30 ? colorLife = 'red' : ''
    points < 0 ? points = 0 : ''
    points = points * 4
    return { points, colorLife }
}
/**
 * Actualiza la barra de vida de las batallas
 * @param {object} lifeBar 
 * @param {number} state 
 */
const healthBar = async (lifeBar, lifePoint) => {
    let { points, colorLife } = color(lifePoint)
    let contentBoxShadow = `inset ${points}px 0 0 0 ${colorLife}`
    lifeBar.animate([
        { boxShadow: contentBoxShadow },
    ], {
        duration: 1000,
        fill: "forwards"
    })
}

const initHealtBar = (lifeBar, lifePoint) => {
    let { points, colorLife } = color(lifePoint)
    let contentBoxShadow = `inset ${points}px 0 0 0 ${colorLife} `
    lifeBar.animate([
        { boxShadow: contentBoxShadow },
    ], {
        duration: 1000,
        fill: "forwards"
    })
}

export { healthBar, initHealtBar }

