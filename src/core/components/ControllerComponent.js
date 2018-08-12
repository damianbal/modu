import Component from "../Component";
import MathUtils, {
    Vec2
} from "../utils/MathUtils";


export default class ControllerComponent extends Component {

    constructor(velocity = {
        x: 0.0,
        y: 0.0
    }) {
        super();

        this.name = "controller"

        this.velocity = velocity
        this.rotation = 0.0
        this.speed = 1.0
        this.rotationSpeed = 1.0

    }

    rotateAtPosition(position) {

        let transform = this.getEntity().getComponent("transform")

        let la = Vec2.create(
            position.x - transform.position.x,
            position.y - transform.position.y
        )

        let rot = Math.atan2(la.y, la.x)
        this.setAngle(rot + MathUtils.degToRad(90))

    }

    setAngle(angle) {
        this.rotation = angle
    }

    rotate(rotation) {
        this.rotation += MathUtils.degToRad(rotation)
    }

    rotateLeft() {
        this.rotation -= MathUtils.degToRad(this.rotationSpeed)
    }

    rotateRight() {
        this.rotation += MathUtils.degToRad(this.rotationSpeed)
    }

    moveLeft() {
        this.velocity.x = -this.speed
    }

    moveRight() {
        this.velocity.x = this.speed
    }

    moveUp() {
        this.velocity.y = -this.speed
    }

    moveDown() {
        this.velocity.y = this.speed
    }

    inverseX() {
        this.velocity.x = -this.velocity.x
    }

    inverseY() {
        this.velocity.y = this.velocity.y
    }

    inverse() {
        this.velocity.x = -this.velocity.x
        this.velocity.y = -this.velocity.y
    }

    jump() {
        this.velocity.y -= this.speed * 3.0
    }

    /**
     * Move to position 
     * 
     * @param {Vec2} position 
     */
    moveTo(position) {
        let pos = this.getEntity().getComponent("transform").position;

        let vel = Vec2.create(pos.x - position.x, pos.y - position.y);
        let normalizedVel = Vec2.normalise(vel);

        this.velocity.x = -normalizedVel.x;
        this.velocity.y = -normalizedVel.y;
    }

    /**
     * Move to entity
     * 
     * @param {Entity} entity 
     */
    moveToEntity(entity) {
        let entityPos = entity.getComponent("transform").position
        this.moveTo(entityPos)
    }

    /**
     * Move forward based on rotation
     */
    moveForward() {
        this.velocity.x = Math.sin(this.rotation)
        this.velocity.y = -Math.cos(this.rotation)
    }

    update(dt) {
        super.update(dt)

        // if there is physics then update physics component
        if (this.getEntity().hasComponent("physics")) {
            let physics = this.getEntity().getComponent("physics")

            physics.setVelocity(this.velocity.x * this.speed, this.velocity.y * this.speed)
            physics.setAngle(this.rotation)
        }

        // if there is no physics
        if (this.getEntity().hasComponent("transform") && !this.getEntity().hasComponent("physics")) {
            let transformComponent = this.getEntity().getComponent("transform");


            transformComponent.position.x += this.velocity.x * this.speed * dt
            transformComponent.position.y += this.velocity.y * this.speed * dt
            transformComponent.rotation = this.rotation
        }


    }

}