import Component from "../Component";
import MathUtils, { Vec2 } from "../utils/MathUtils";


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

    }

    setAngle(angle) {
        this.rotation = angle 
    }

    rotate(rotation) {
        this.rotation += MathUtils.degToRad(rotation)
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
        if(this.getEntity().hasComponent("physics")) {
            let physics = this.getEntity().getComponent("physics")
            
            physics.setVelocity(this.velocity.x * this.speed, this.velocity.y * this.speed) 
            physics.setAngle(this.rotation)
        }

        // if there is no physics
        if (this.getEntity().hasComponent("transform") && !this.getEntity().hasComponent("physics")) {
            let transformComponent = this.getEntity().getComponent("transform");


            transformComponent.position.x += this.velocity.x * this.speed * dt
            transformComponent.position.y += this.velocity.y * this.speed * dt
            transformComponent.rotation   = this.rotation
        }

  
    }

}