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
     * @param {string} text
     */
    constructor(text = "Text") {
        super()

        this.text = text
        this.textNode = null
        this.localPosition = Vec2.create(0,0)
        this.rotationEnabled = false

        this.style = {
                fontFamily: 'Helvetica',
                fontSize: 20,
                fill: 0xff1010,
                align: 'center'
        }

    }

    /**
     * Set color in HEX
     * 
     * @param {integer} color 
     */
    setColor(color = 0x000000) {
        if(this.textNode) {
            this.textNode.style.fill = color 
        }
    }

    /**
     * Set font
     * 
     * @param {string} font 
     */
    setFont(font) {
        if (this.textNode) {
            this.textNode.style.fontFamily = font 
        }
    }

    /**
     * Set font size
     * @param {integer} size 
     */
    setSize(size = 20) {
        if (this.textNode) {
            this.textNode.style.fontSize = size
        }
    }

    /**
     * Set text
     * 
     * @param {string} text 
     */
    setText(text = "") {
        if(this.textNode) {
            this.textNode.text = text
        }
    }

    /**
     * Get text
     */
    getText() {
        return this.textNode.text
    }

    /**
     * Create
     */
    create() {
        this.textNode = new PIXI.Text(this.text, this.style)
        this.textNode.anchor.x = 0.5
        this.textNode.anchor.y = 0.5

        this.getSystem().rendering.getLayer(this.getEntity().layer).addChild(this.textNode)

        if (this.getEntity().hasComponent("transform")) {
            let transformComponent = this.getEntity().getComponent("transform");

            this.textNode.position.x = transformComponent.position.x;
            this.textNode.position.y = transformComponent.position.y;

            if(this.rotationEnabled) {
                this.textNode.rotation = transformComponent.rotation;
            }
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