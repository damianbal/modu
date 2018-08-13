
export default class Animations {

    constructor() {
        this.animations = [];
    }

    addAnimation(name, images) {

        this.animations[name] = { images: images };

    }

    getAnimation(name) {
        return this.animations[name];
    }

}