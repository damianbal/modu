import Component from "../Component";


export default class ControllerComponent extends Component {

    constructor(velocity = {
        x: 0.0,
        y: 0.0
    }) {
        super();

        this.name = "controller"

        this.velocity = velocity

    }
    
    update(dt) {
        super.update(dt)

        if(this.getEntity().hasComponent("physics")) {
            let physics = this.getEntity().getComponent("physics")
            
            physics.setVelocity(this.velocity.x, this.velocity.y)
        }

        // get transform component
        if (this.getEntity().hasComponent("transform") && !this.getEntity().hasComponent("physics")) {
            let transformComponent = this.getEntity().getComponent("transform");


            transformComponent.position.x += this.velocity.x * dt;
            transformComponent.position.y += this.velocity.y * dt;
        }

  
    }

}