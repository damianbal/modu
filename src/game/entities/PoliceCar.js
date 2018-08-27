import Entity from "../../core/Entity";
import TransformComponent from "../../core/components/TransformComponent";
import SpriteComponent from "../../core/components/SpriteComponent";
import PhysicsComponent from "../../core/components/PhysicsComponent";
import ControllerComponent from "../../core/components/ControllerComponent";
import PhysicsComponentFactory from "../../core/PhysicsComponentFactory";
import AnimatorComponent from "../../core/components/AnimatorComponent";
import { policeCarAnimations } from "../Assets";

export default class PoliceCar extends Entity {

    constructor(position = Vec2.create(0, 0)) {
        super()

        this.transform = new TransformComponent({
            x: position.x,
            y: position.y
        })
        this.sprite = new SpriteComponent("assets/p1.png", 200, 200)
        this.physics = PhysicsComponentFactory.sprite(false)
        this.controller = new ControllerComponent()
        this.animator = new AnimatorComponent(0.15, policeCarAnimations)
        this.animator.setAnimation("sirens")

        this.tag = "PoliceCar"

        this.addComponents([this.transform, this.sprite, this.physics, this.controller, this.animator])
    }

    setup() {
        super.setup()
    }

    update(dt) {
        super.update(dt)
    }
}