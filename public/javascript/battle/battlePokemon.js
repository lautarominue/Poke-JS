import { createSprite } from "../function/index.js";
import { changeEnemy } from "./enemy/enemy.js";
import { PokemonObject } from "../class/objetcPokemonClass.js"

let sprite = {}

const createPokemonEnemy = async () => {
    let id = Math.floor(Math.random() * 151)
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    let data = await response.json();
    const image = data.sprites.front_default
    let position = {x:900,y:14}
    let size = {x:300,y:300}
    sprite = createSprite(image,position,size)

    let enemy = new PokemonObject(id, data.name)
    changeEnemy(enemy)

    return enemy
}


export { createPokemonEnemy, sprite as spriteEnemy }