class PokemonObject {
    constructor(id, name) {
        this.id = id
        this.name = name
        this.health = 100
    }

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

}

export { PokemonObject }