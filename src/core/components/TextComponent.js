import Component from "../Component"
import { Vec2 } from "../utils/MathUtils"

import * as PIXI from 'pixi.js'

export default class TextComponent extends Component {

    static name() {
        return "text"
    }

    /**
     * Create TextComponent
     * 
     * 
     * @param {string} image 
     * @param {integer} width 
     * @param {integer} height 
     */
    constructor(text = "Text") {
        super()

        this.text = text
        this.textNode = null
        this.localPosition = Vec2.create(0,0)
        this.rotationEnabled = false
    }


    create() {

        this.textNode = new PIXI.Text(this.text)
        this.textNode.anchor.x = 0.5
        this.textNode.anchor.y = 0.5

        this.getSystem().rendering.getLayer(this.getEntity().layer).addChild(this.textNode)

        // set sprite position to position of transform component
        if (this.getEntity().hasComponent("transform")) {
            let transformComponent = this.getEntity().getComponent("transform");

            this.textNode.position.x = transformComponent.position.x;
            this.textNode.position.y = transformComponent.position.y;
            //this.textNode.rotation = transformComponent.rotation
        }
    }


    /**
     * Update text, apply transform from TransformComponent
     * @param {float} dt 
     */
    update(dt) {
        super.update(dt)

        if (this.textNode != null) {
            let transform = this.getEntity().getComponent("transform")

            if (transform != null) {
                let transformComponent = transform;

                this.textNode.position.x = transformComponent.position.x + this.localPosition.x
                this.textNode.position.y = transformComponent.position.y + this.localPosition.y

                if(this.rotationEnabled) {
                    this.textNode.rotation = transformComponent.rotation;
                }
            }
        }
    }



    /**
     * Remove text from layer and destroy it
     */
    destroy() {
        this.getSystem().rendering.getLayer(this.getEntity().layer).removeChild(this.textNode)
        this.textNode.destroy()
    }

}