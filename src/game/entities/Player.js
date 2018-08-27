import Entity from "../../core/Entity";
import TransformComponent from "../../core/components/TransformComponent";
import SpriteComponent from "../../core/components/SpriteComponent";
import PhysicsComponent from "../../core/components/PhysicsComponent";
import ControllerComponent from "../../core/components/ControllerComponent";
import MathUtils, { Vec2 } from "../../core/utils/MathUtils";
import { Keys } from "../../core/Input";
import Bullet from "./Bullet";
import PhysicsComponentFactory from "../../core/PhysicsComponentFactory";

export default class Player extends Entity {

    constructor(position = Vec2.create(0, 0)) {
        super()

        this.transform = new TransformComponent({
            x: position.x,
            y: position.y
        })
        this.sprite = new SpriteComponent("assets/_player.png", 86, 86)
        //this.physics = PhysicsComponent.sprite()
        this.physics = PhysicsComponentFactory.circle(32)
        this.controller = new ControllerComponent()
        this.player = null

        this.tag = "Player"

        this.layer = 5

        this.controller.speed = 2.0

        this.addComponents([this.transform, this.sprite, this.physics, this.controller])
    }

    onKeyUp(key) {
        if(key == Keys.RIGHT || key == Keys.LEFT) this.controller.velocity.x = 0;
        if (key == Keys.UP || key == Keys.DOWN) this.controller.velocity.y = 0;
        if(key == Keys.SPACE) {
            /*
            //this.getSystem().addEntity(new Bullet(this.transform.position))
            let v = Vec2.create(1,0)
            let pos = Vec2.create(this.transform.position.x + v.x * 80.0, 
            this.transform.position.y + v.y * 100.0)
            this.getSystem().addBullet(pos, v, this)
            */
        }
    }

    onKeyDown(key) {
        if (key == Keys.RIGHT) this.controller.moveRight()
        if (key == Keys.LEFT) this.controller.moveLeft()
        if (key == Keys.UP) this.controller.moveUp()
        if (key == Keys.DOWN) this.controller.moveDown()

    }

    onCollisionStart(entity) {
        if(entity.tag == "Zombie") {
            this.getSystem().addBlood(this.transform.position.x, this.transform.position.y)
        }
    }

    setup() {
        super.setup()
    }

    update(dt) {
        super.update(dt)

        this.controller.lookAt(this.getSystem().getMousePosition())
    }
}