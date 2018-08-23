
export default class Animations {

    constructor() {
        this.animations = [];
    }

    /**
     * Add animation with frames
     * 
     * @param {string} name 
     * @param {array} images 
     */
    addAnimation(name, images) {
        this.animations[name] = { images: images };
    }

    /**
     * Return animation 
     * 
     * @param {string} name 
     */
    getAnimation(name) {
        return this.animations[name];
    }

}