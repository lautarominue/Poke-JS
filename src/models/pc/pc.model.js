class Model {
    #id
    #idPokedex
    #name
    #type
    #image

    constructor({ id,idPokedex, name, type, image }) {
        this.id = id
        this.#idPokedex = idPokedex
        this.name = name
        this.type = type
        this.image = image
    }

    get id() { return this.#id }

    set id(id) {
        if (!id) throw new Error('"id" es un campo requerido')
        this.#id = id
    }

    get idPokedex() { return this.#idPokedex }

    set idPokedex(idPokedex) {
        if (!idPokedex) throw new Error('"idPokedex" es un campo requerido')
        this.#idPokedex = idPokedex
    }

    get name() { return this.#name }

    set name(name) {
        if (!name) throw new Error('"nombre" es un campo requerido')
        this.#name = name
    }

    get type() { return this.#type }

    set type(type) {
        if (!type) throw new Error('"type" es un campo requerido')
        this.#type = type
    }

    get image() { return this.#image }

    set image(image) {
        if (!image) throw new Error('"image" es un campo requerido')
        this.#image = image
    }
}

export { Model as PcModel }