import { createSprite } from "../function/index.js";
import { changeEnemy, changeEnemyObject } from "./enemy/enemy.js";
import { PokemonObject } from "../class/objetcPokemonClass.js"

let sprite = {}

const createPokemonEnemy = async () => {
    let id = Math.floor(Math.random() * 151)
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    let data = await response.json();
    let typeOne
    let typeTwo
    if(data.types.length > 1){
        typeOne = data.types[0].type.name
        typeTwo = data.types[1].type.name
    }else{
        typeOne = data.types[0].type.name
        typeTwo = null
    }
    const name = data.name
    const type = {one:typeOne,two:typeTwo }
    const image = {
        front: data.sprites.front_default,
        back: data.sprites.back_default,
        thumnail: data.sprites.versions['generation-viii'].icons.front_default,
    }
    const pokemon = {
        name:name,
        idPokedex:id,
        types : {
            one: type.one,
            two: type.two
        },
        image:{
            thumnail:image.thumnail,
            front:image.front,
            back:image.back
        }
    }
    changeEnemyObject(pokemon)
    let enemy = new PokemonObject(pokemon)
    changeEnemy(enemy)
    let position = {x:900,y:14}
    let size = {x:300,y:300}
    sprite = enemy.createSprite(position,size,true)

    return enemy
}


export { createPokemonEnemy, sprite as spriteEnemy }