import Entity from "../../core/Entity";
import TransformComponent from "../../core/components/TransformComponent";
import SpriteComponent from "../../core/components/SpriteComponent";
import PhysicsComponent from "../../core/components/PhysicsComponent";
import ControllerComponent from "../../core/components/ControllerComponent";
import MathUtils from "../../core/utils/MathUtils";
import PhysicsComponentFactory from "../../core/PhysicsComponentFactory";

export default class Zombie extends Entity {

    constructor(position = Vec2.create(0, 0)) {
        super()

        this.transform = new TransformComponent({
            x: position.x,
            y: position.y
        })
        this.sprite = new SpriteComponent("assets/z.png")
        this.physics = PhysicsComponentFactory.circleSprite(false)
        this.controller = new ControllerComponent()
        this.player = null

        this.tag = "Zombie"
            this.layer = 4

        this.addComponents([this.transform, this.sprite, this.physics, this.controller])

        this.controller.speed = 0.5
    }

    setup() {
        super.setup()
    }

    update(dt) {
        super.update(dt)

        //this.physics.rotate(MathUtils.random(0,5))
        this.controller.rotate(MathUtils.random(0,30)-MathUtils.random(0,30))
        this.controller.moveForward()

        // follow player
        if(this.player == null) {
            this.player = this.getSystem().getByTag("Player")[0]
        }
       
        if(this.player) {
        this.controller.lookAtEntity(this.player)
        this.controller.moveForward()
        }
    }
}