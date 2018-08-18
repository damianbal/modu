import Entity from "../../core/Entity";
import TransformComponent from "../../core/components/TransformComponent";
import SpriteComponent from "../../core/components/SpriteComponent";
import PhysicsComponent from "../../core/components/PhysicsComponent";
import ControllerComponent from "../../core/components/ControllerComponent";

export default class BaseEntity extends Entity {

    constructor(position = Vec2.create(0, 0)) {
        super()

        this.transform = new TransformComponent({
            x: position.x,
            y: position.y
        })
        this.sprite = new SpriteComponent("SPRITE")
        this.physics = PhysicsComponent.rect(128, 128, false)
        this.controller = new ControllerComponent()

        this.tag = "BaseEntity"

        this.addComponents([this.transform, this.sprite, this.physics, this.controller])
    }

    setup() {
        super.setup()
    }

    update(dt) {
        super.update(dt)

        // this.controller.moveForward()
    }
}