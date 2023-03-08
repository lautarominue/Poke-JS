import { c } from "../canvas/canvas.js"
// Visualizacion del mapa y del personaje
class Sprite {


    constructor({ image, position, size }) {
        this.position = position
        this.image = image
        this.size = size
        this.initPosition = position.x
    }
    //funcion para imprimir una imagen en 
    draw() {
        c.drawImage(
            this.image,
            this.position.x, // x 
            this.position.y, // y
            this.size.x, // Ancho
            this.size.y //Altura
        )
    }

    drawPokeball(typePokeball) {
        
    }

    moveAtack(atack) {
        if (atack == 'player') {
            this.position.x -= 6
        }
        if (atack == 'enemy') {
            this.position.x += 6
        }

    }

    finalMoveAtack(atack) {
        if (this.initPosition != this.position.x && atack == 'enemy') {
            this.position.x -= 6
        }
        if (this.initPosition != this.position.x && atack == 'player') {
            this.position.x += 6
        }
    }



}

export { Sprite as SpriteBattle }
