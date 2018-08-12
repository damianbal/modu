import EntityBuilder from "../../core/utils/EntityBuilder";
import SpriteComponent from "../../core/components/SpriteComponent";
import TransformComponent from "../../core/components/TransformComponent";
import { System } from "../../core/System";
import { Keys } from "../../core/Input";

export default class MenuSystem extends System {

    constructor() {
        super();
    }

    preload() {
      //  this.loader.add("assets/modu-logo.png")
    }

    onClickEntity(entity) {
        if(entity.tag == "logo") {
            // start game
        }
    }

    onKeyUp(key) {
        if(key == Keys.X) {
            this.rendering.hide()
        }

        if(key == Keys.C) {
            this.rendering.show()
        }
    }

    setup() {
        super.setup()

        let logo = EntityBuilder.builder(this).addComponent(
            new TransformComponent({x: 300.0, y: 300.0})
        ).addComponent(new SpriteComponent("assets/modu-logo.png")).setTag("logo").get()

        this.addEntity(logo)

        setTimeout(() => {
            this.getManager().setSystem('game')
        }, 3000)
    }

}