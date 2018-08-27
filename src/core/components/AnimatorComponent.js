import Component from "../Component";
import Timer from "../Timer";


export default class AnimatorComponent extends Component {

    /**
     * Construct AnimatorComponent
     * 
     * @param {float} frameTime 
     * @param {Animations} anims 
     */
    constructor(frameTime = 0.20, anims = null) {
        super()

        this.animations = anims
        this.frameTime = frameTime 
        this.currentAnimation = null
        this.currentFrame = 0
        this.paused = false
        this.played  =false
        this.name = "animator"
        this.loop = true
    }

    /**
     * Create animator component
     */
    create() {
        super.create();
        // create timer
       // this.timer = setInterval(this._handleAnimation.bind(this), this.frameTime * 1000.0)
       this.timer = new Timer(this.frameTime, this._handleAnimation.bind(this), false)
        console.log(this.animations)
    }

    /**
     * Set animations that this Animator can use
     * 
     * @param {Animations} animations 
     */
    setAnimations(animations) {
        this.animations = animations
    }

    /**
     * Handles animation loop
     */
    _handleAnimation() {
        let sprite = this.getComponentOfEntity("sprite");

       if(this.currentAnimation != null && !this.paused) {

            let currAnim = this.animations.getAnimation(this.currentAnimation)

            let maxFrames = currAnim.images.length

            if(this.currentFrame >= maxFrames) {
                this.currentFrame = 0
                this.played = true
            }

            sprite.setTexture(currAnim.images[this.currentFrame])

          
                this.currentFrame ++
            
       }
     
    }

    stop() {
        let sprite = this.getComponentOfEntity("sprite")

        sprite.setTexture(this.animations.getAnimation(this.currentAnimation).images[0])

        this.paused = true
    }

    /**
     * Set current animation
     * 
     * @param {string} anim 
     */
    setAnimation(anim) {
        this.currentFrame = 0
        this.currentAnimation = anim
    }

    play(anim) {
        this.played = false 
        this.setAnimation(anim)
    }

    /**
     * Update component
     * 
     * @param {float} dt 
     */
    update(dt) {
        super.update(dt)
    }

    /**
     * Destroy component
     */
    destroy() {
        super.destroy()

        this.timer.destroy()
    }

}