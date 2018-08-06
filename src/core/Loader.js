
import * as PIXI from 'pixi.js'

export default class Loader {

    constructor() {
        this.images = [];
    }

    add(image) {
        this.images.push(image)
    }

    addImages(images) {
        this.images.forEach(img => this.add(img))
    }

    load(loaded_cb = () => {}) {
        this.images.forEach(image => {
            PIXI.loader.add(image)
        })

        PIXI.loader.load(loaded_cb)
    }

}