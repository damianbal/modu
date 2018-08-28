import Component from "../Component"

import * as PIXI from 'pixi.js'

export default class SpriteComponent extends Component {

    static name() {
        return "sprite"
    }

    /**
     * Create SpriteComponent, set width and height if you want 
     * sprite to be created with different size.
     * 
     * @param {string} image 
     * @param {integer} width 
     * @param {integer} height 
     */
    constructor(image, width = 0, height = 0) {
        super()

        this.image = image
        this.name = "sprite"
        this.sprite = null

        this.width = width
        this.height = height
    }

    validate() {
        if (this.sprite == null) {
            console.error("sprite is null")
            return false
        }

        return true
    }

    create() {
        this.sprite = new PIXI.Sprite(
            PIXI.loader.resources[this.image].texture
        )

        // set anchor to center of sprite
        this.sprite.anchor.set(0.5, 0.5)

        if (this.getSystem().getSystemComponent("rendering") == null) {
            console.error("System is missing 'rendering' component!")
            return;
        }

        // add sprite to layer
        //this.getSystem().getSystemComponent("rendering").getLayer(this.getEntity().layer).addChild(this.sprite);
        this.getSystem().rendering.getLayer(this.getEntity().layer).addChild(this.sprite)

        // set sprite position to position of transform component
        if (this.getEntity().hasComponent("transform")) {
            let transformComponent = this.getEntity().getComponent("transform");

            this.sprite.position.x = transformComponent.position.x;
            this.sprite.position.y = transformComponent.position.y;
            this.sprite.rotation = transformComponent.rotation
        }

        // sprite events
        this.sprite.interactive = true
        this.sprite.click = this._click.bind(this)

        // if width and height been supplied then apply it
        if (this.width > 0 && this.height > 0) {
            this.sprite.width = this.width
            this.sprite.height = this.height
        }

        console.log('[SpriteComponent]: created', this)
    }

    // handle sprite click
    _click() {
        // dispatch onClick for entity
        this.getEntity().onClick();

        // dispatch onClickEntity for system 
        this.getSystem().onClickEntity(this.getEntity())
    }

    /**
     * Make sprite visible or hidden
     * @param {boolean} visible 
     */
    setVisible(visible = true) {
        if (!this.validate()) return;

        this.sprite.visible = visible
    }

    /**
     * Set texture for sprite, make sure to preload texture
     * 
     * @param {string} texture_path 
     */
    setTexture(texture_path) {
        if (!this.validate()) return;

        this.sprite.texture = PIXI.loader.resources[texture_path].texture
    }

    /**
     * Set temporary texture for duration in seconds
     * 
     * @param {string} texture_path 
     * @param {integer} durationSecs 
     */
    setTemporaryTexture(texture_path, durationSecs = 1.0) {
        if (!this.validate()) return;

        let oldTex = this.sprite.texture;
        this.setTexture(texture_path)
        setTimeout(() => {
            this.sprite.texture = oldTex
        }, durationSecs * 1000.0)
    }

    /**
     * Set alpha of sprite
     * 
     * @param {float} alpha 
     */
    setAlpha(alpha = 1.0) {
        if (!this.validate()) return;

        this.sprite.alpha = alpha
    }

    /**
     * Update sprite, apply transform from TransformComponent
     * @param {float} dt 
     */
    update(dt) {
        super.update(dt)

        if (this.sprite != null) {
            let transform = this.getEntity().getComponent("transform")

            if (transform != null) {
                let transformComponent = transform;

                this.sprite.position.x = transformComponent.position.x 
                this.sprite.position.y = transformComponent.position.y;
                this.sprite.rotation = transformComponent.rotation;
                // this.sprite.width = this.sprite.texture.width
                // this.sprite.height = this.sprite.texture.height
            }
        }
    }

    getWidth() {
        return this.sprite.width
    }

    getHeight() {
        return this.sprite.height
    }

    /**
     * Remove sprite from layer and destroy it
     */
    destroy() {
        this.getSystem().rendering.getLayer(this.getEntity().layer).removeChild(this.sprite)
        this.sprite.destroy()
    }

}