import Component from "../Component"

import * as PIXI from 'pixi.js'

export default class SpriteComponent extends Component {

    constructor(image) {
        super()

        this.image = image
        this.name = "sprite"
        this.sprite = null
    }

    create() {
        this.sprite = PIXI.Sprite.fromImage(this.image)

        this.sprite.anchor.set(0.5, 0.5)

        if(this.getSystem().getSystemComponent("rendering") == null) {
            console.error("System is missing 'rendering' component!")
            return;
        }

        this.getSystem().getSystemComponent("rendering").getLayer(0).addChild(this.sprite);

        if (this.getEntity().hasComponent("transform")) {
            let transformComponent = this.getEntity().getComponent("transform");

            this.sprite.position.x = transformComponent.position.x;
            this.sprite.position.y = transformComponent.position.y;
            this.sprite.rotation = transformComponent.rotation
        }
    }

    update(dt) {
        super.update(dt)



        if (this.sprite != null) {
            if (this.getEntity().hasComponent("transform")) {
                let transformComponent = this.getEntity().getComponent("transform");

                this.sprite.position.x = transformComponent.position.x;
                this.sprite.position.y = transformComponent.position.y;
                this.sprite.rotation = transformComponent.rotation;
            }
        }
    }

    getWidth() {
        return this.sprite.width
    }

    getHeight() {
        return this.sprite.height
    }

}