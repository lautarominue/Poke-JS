import { SpriteBattle } from "./index.js"

class PokemonObject {
    constructor({ idPokedex, name, types, image,_id }) {
        this.id = idPokedex
        this.name = name
        this.health = 100
        this.thumnail = image.thumnail
        this.image = image
        this.type = types 
        this.objectId = _id
    }

    getObjectId = () => this.objectId

    getId = () => this.id

    getName = () => this.name

    getHealth = () => this.health

    damage = atack => {
        this.health -= atack
        return this.health
    }

    potion = life => {
        this.health += life
        return this.health
    }

    cureTotal = () =>{
        this.health = 100
    }
    getImage = image => {
        if (image === 'thumnail')
            return this.thumnail
        if (image === 'front')
            return this.image.front
        if (image === 'back')
            return this.image.back
    }

    changeName = newName => this.name = newName

    /**
     * 
     * @param {*} position 
     * @param {*} size 
     * @param {Boolean} image true para imagen front y false para back 
     * @returns 
     */
    createSprite = (position, size, imageState) => {
        let imageUrl = ''
        imageState ? imageUrl = this.image.front : imageUrl = this.image.back
        let image = new Image()
        image.src = imageUrl
        let pokemon = { image, position, size }
        let sprite = new SpriteBattle(pokemon)
        return sprite
    }

}

export { PokemonObject }