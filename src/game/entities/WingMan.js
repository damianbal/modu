import Entity from "../../core/Entity";
import { Vec2 } from "../../core/utils/MathUtils";
import TransformComponent from "../../core/components/TransformComponent";
import SpriteComponent from "../../core/components/SpriteComponent";
import PhysicsComponent from "../../core/components/PhysicsComponent";
import ControllerComponent from "../../core/components/ControllerComponent";
import { Keys } from "../../core/Input";
import Sound from "../../core/Sound";
import AnimatorComponent from "../../core/components/AnimatorComponent";
import { wingManAnimations } from "../Assets";
import PhysicsSystemComponent from "../../core/system_components/PhysicsSystemComponent";

export default class WingManEntity extends Entity {

    constructor(position = Vec2.create(0,0)) {
        super()

        this.transform = new TransformComponent({x: position.x, y: position.y})
        this.sprite = new SpriteComponent("assets/wingMan1.png")

        this.animator = new AnimatorComponent(0.05, wingManAnimations)
        this.animator.setAnimation("wing")

        //this.physics = PhysicsComponent.circle(128.0, false)

        this.tag = "WingMan"
        this.layer = 6

        this.addComponents([this.transform, this.sprite, this.animator/*, this.physics*/])
    }


    setup() {
        super.setup()

       
    }

    onKeyUp(key) {
       
        if(key == Keys.F) {
            this.animator.stop()
        }
    }

    update(dt) {
        super.update(dt)
    }
}