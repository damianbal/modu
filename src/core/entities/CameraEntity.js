import Entity from "../../core/Entity";
import TransformComponent from "../../core/components/TransformComponent";

export default class CameraEntity extends Entity {

    constructor(position = Vec2.create(0, 0)) {
        super()

        this.transform = new TransformComponent({
            x: position.x,
            y: position.y
        })

        this.tag = "Camera"
        this.name = "Camera"

        this.addComponents([this.transform])
    }

    setup() {
        super.setup()
    }

    update(dt) {
        super.update(dt)
    }
}