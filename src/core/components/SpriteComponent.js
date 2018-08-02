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

        this.getSystem().getSystemComponent("rendering").getLayer(0).addChild(this.sprite);

        if(this.getEntity().hasComponent("transform")) {
            let transformComponent = this.getEntity().getComponent("transform");

            this.sprite.position.x = transformComponent.position.x; 
            this.sprite.position.y = transformComponent.position.y;
        }
    }

    update(dt) {
        super.update(dt)

        

        if(this.sprite != null) {
            if(this.getEntity().hasComponent("transform")) {
                let transformComponent = this.getEntity().getComponent("transform");

                this.sprite.position.x = transformComponent.position.x; 
                this.sprite.position.y = transformComponent.position.y;
                console.log('ustawiam pozycje!')
               // this.sprite.rotation = transformComponent.rotation;
            }
        }
    }

}