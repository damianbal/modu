import Component from "../Component";


export default class AnimatorComponent extends Component {

    constructor(frameTime = 0.20, anims = null) {
        super()

        this.animations = anims
        this.frameTime = frameTime 
        this.currentAnimation = null
        this.currentFrame = 0
    }

    create() {
        super.create();
        // create timer
        this.timer = setInterval(this._handleAnimation.bind(this), this.frameTime * 1000.0)
        console.log(this.animations)
    }

    setAnimations(animations) {
        this.animations = animations
    }

    _handleAnimation() {
        let sprite = this.getComponentOfEntity("sprite");

       if(this.currentAnimation != null) {

            let currAnim = this.animations.getAnimation(this.currentAnimation)

            let maxFrames = currAnim.images.length

            if(this.currentFrame >= maxFrames) {
                this.currentFrame = 0
            }

            sprite.setTexture(currAnim.images[this.currentFrame])

            this.currentFrame ++
       }
     
    }

    stop() {
        let sprite = this.getComponentOfEntity("sprite")

        sprite.setTexture(this.animations.getAnimationt(this.currentAnimation).images[0])
    }

    setAnimation(anim) {
        this.currentFrame = 0
        this.currentAnimation = anim
    }

    update(dt) {
        super.update(dt)
    }

    destroy() {
        super.destroy()

        clearInterval(this.timer)
    }

}