
import * as PIXI from 'pixi.js'

export default class Loader {

    constructor() {
        this.images = [];
    }

    /**
     * Add path to image which should be loaded
     * 
     * @param {string} image 
     */
    add(image) {
        this.images.push(image)
    }

    /**
     * Add paths to images which should be loaded
     * 
     * @param {string[]} images 
     */
    addImages(images) {
        images.forEach(img => this.add(img))
    }

    /**
     * Load images which should be loaded 
     * and then run callback when loaded
     * 
     * @param {callback} loaded_cb 
     */
    load(loaded_cb = () => {}) {
        this.images.forEach(image => {
            PIXI.loader.add(image)
        })

        PIXI.loader.load(loaded_cb)
    }

}