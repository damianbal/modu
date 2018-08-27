import Entity from "../../core/Entity";
import TransformComponent from "../../core/components/TransformComponent";
import SpriteComponent from "../../core/components/SpriteComponent";
import PhysicsComponent from "../../core/components/PhysicsComponent";
import ControllerComponent from "../../core/components/ControllerComponent";
import { Vec2 } from "../../core/utils/MathUtils";
import Sound from "../../core/Sound";
import PhysicsComponentFactory from "../../core/PhysicsComponentFactory";

export default class Bullet extends Entity {

    constructor(position = Vec2.create(0, 0), rotation = 0.0) {
        super()

        this.transform = new TransformComponent({
            x: position.x,
            y: position.y
        })
        this.sprite = new SpriteComponent("assets/bullet.png", 4, 8)
        this.physics = PhysicsComponentFactory.circle(4)
        this.physics.sensor = true
        this.controller = new ControllerComponent()

        this.tag = "Bullet"

        this.addComponents([this.transform, this.sprite, this.physics, this.controller])

      //  this.dir = dir
        this.controller.speed = 9.0
        this.controller.rotation = rotation
        this.shooter = null
    }

    setup() {
        super.setup()

        this.physics.setDensity(0.9)
    }

    onCollisionStart(entity) {
        if(entity.tag == "Zombie") {
            let pos = entity.getComponent("transform").position
             this.getSystem().addBlood(pos.x, pos.y)
             entity.remove()
             Sound.play('assets/sfx/zombie_hurt.wav')
            
        }
        else if(this.shooter != entity) {
            this.remove()
        }
    }

    update(dt) {
        super.update(dt)

        this.controller.moveForward()
    }
}