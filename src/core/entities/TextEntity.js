import Entity from "../../core/Entity";
import TransformComponent from "../../core/components/TransformComponent";
import TextComponent from "../components/TextComponent";

export default class TextEntity extends Entity {

    constructor(text = "Text", position = Vec2.create(0, 0)) {
        super()

        this.transform = new TransformComponent({
            x: position.x,
            y: position.y
        })
 
        this.text = new TextComponent(text)

        this.tag = "TextEntity"
        this.layer = 8

        this.addComponents([this.transform, this.text])
    }

    setup() {
        super.setup()
    }

    update(dt) {
        super.update(dt)
    }
}