import Animations from "../Animations";

export default class AnimationsBuilder {

    constructor() {
        this.animations = new Animations();
    }

    static builder() {
        return new AnimationsBuilder()
    }

    addAnimation(name, images) {
        this.animations.addAnimation(name, images)

        return this
    }

    getAnimations() {
        return this.animations
    }

}