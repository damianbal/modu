import Entity from "../../core/Entity";
import { Vec2 } from "../../core/utils/MathUtils";
import TransformComponent from "../../core/components/TransformComponent";
import SpriteComponent from "../../core/components/SpriteComponent";
import PhysicsComponent from "../../core/components/PhysicsComponent";
import ControllerComponent from "../../core/components/ControllerComponent";
import { Keys } from "../../core/Input";
import Sound from "../../core/Sound";

export default class SpaceshipEntity extends Entity {

    constructor(position = Vec2.create(0,0)) {
        super()

        this.transform = new TransformComponent({x: position.x, y: position.y})
        this.sprite = new SpriteComponent("assets/spaceship.png")
        this.physics = PhysicsComponent.circle(54.0, false)
        this.controller = new ControllerComponent()

        this.tag = "Spaceship"

        this.addComponents([this.transform, this.sprite, this.physics, this.controller])
    }

    onCollisionStart(entity) {
        if(entity.tag == "wall") {
            console.log('ohh collision with ground :(')
           // this.controller.moveTo(Vec2.create(0,0))
            this.sprite.setAlpha(0.1)
        }

        //Sound.play("assets/sfx/phaser.ogg")
    }

    onCollisionActive(entity) {
        if(entity.tag == "wall") {
            this.sprite.setTexture("assets/spaceship-alt.png")
        }

   
    }

    onCollisionEnd(entity) {
        if(entity.tag == "wall") {
            this.sprite.setAlpha(1.0)
            this.sprite.setTexture("assets/spaceship.png")
        }
    }
    
    onKeyDown(key) {
        

        if(key == Keys.W) {
            this.sprite.setAlpha(1.0)
            this.controller.speed = 1.0
        }
 
        if(key == Keys.A) {
            this.controller.rotate(-20)
        }

        if(key == Keys.D) {
            this.controller.rotate(20)
        }

        if(key == Keys.CTRL) {
            this.controller.speed = 3.0
        }

        if(key == Keys.SPACE) {
            this.controller.speed = 0.0
        }

        if(key == Keys.X) {
            this.controller.jump()
        }

        if(key == Keys.V) {
            this.controller.rotateAtPosition(Vec2.create(this.transform.position.x + 100.0, this.transform.position.y))
        }
    }

    onClick() {
        this.sprite.setAlpha(0.5)
    }

    setup() {
        super.setup()

        // setup spaceship right here :)
    }

    update(dt) {
        super.update(dt)

        this.controller.moveForward()
    }
}