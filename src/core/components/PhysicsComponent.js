import Component from "../Component";

import Matter from "matter-js";

export default class PhysicsComponent extends Component {

    static name() { return "physics" }

    constructor(type, params = { isStatic: false, x: 0.0, y: 0.0, w: 32.0, h: 32.0 }) {
        super();

        this.name = "physics"

        this.body = null;
        this.params = params 
        this.type = type
    }

    static rect(width = 64, height = 64, isStatic = false) {
        let pc = new PhysicsComponent('rect', { isStatic, w: width, h: height })
        return pc
    }

    static sprite(isStatic = false) {
        let pc = new PhysicsComponent('sprite', { isStatic, width: 0, height: 0 })
        return pc
    }
    
    static circle(radius = 32, isStatic = false) {
        let pc = new PhysicsComponent('circle', { w: radius, isStatic })
        return pc
    }

    create() {
        let transform = this.getEntity().getComponent("transform");
       
        let s = this.getEntity().getComponent("sprite");

        console.log('Sprite component (physics): ', s.getWidth())

        if(this.type == 'rect') {
            this.body = Matter.Bodies.rectangle(transform.position.x, transform.position.y, this.params.w, this.params.h, {
                isStatic: this.params.isStatic
            })
        }
        else if(this.type == 'sprite') { // TODO: sprite as circle as well?
            this.body = Matter.Bodies.rectangle(transform.position.x, transform.position.y, s.getWidth(), s.getHeight(), {
                isStatic: this.params.isStatic
            })
        }
        else if(this.type == 'circle') {
            this.body = Matter.Bodies.circle(transform.position.x, transform.position.y, this.params.w, { isStatic: this.params.isStatic })
        }
    
        if(this.body == null) {
            console.log('[PhysicsComponent]: body is null, did you pass correct type?')
            return;
        }
        
        this.getSystem().getSystemComponent("physics").addBody(this.body)

        console.log("Created physics component", this.body)
    }

    update(dt) {

        super.update(dt);



        // TODO: set body position to transform :)
        if(this.body != null) {
            let transform = this.getEntity().getComponent("transform");

            transform.position.x = this.body.position.x 
            transform.position.y = this.body.position.y 
            transform.rotation = this.body.angle

 
            
        }

        

    }

    setMass(mass) {
        Matter.Body.setMass(this.body, mass)
    }

    setVelocity(x, y) {
        Matter.Body.setVelocity(this.body, Matter.Vector.create(x,y))
    }

    setVelocityX(x) {
        Matter.Body.setVelocity(this.body, Matter.Vector.create(x, this.body.velocity.y))
    }

    setVelocityY(y) {
        Matter.Body.setVelocity(this.body, Matter.Vector.create(this.body.velocity.x, y))
    }

    applyForce(position, force) {
        Matter.Body.applyForce(this.body, position, force)
    }

    setAngle(angle) {
        Matter.Body.setAngle(this.body, angle)
    }

    setAngularVelocity(velocity) {
        Matter.Body.setAngularVelocity(this.body, velocity)
    }

    setDensity(density) {
        Matter.Body.setDensity(this.body, density)
    }
    
    setInertia(inertia) {
        Matter.Body.setInertia(this.body, inertia)
    }

    setPosition(x,y) {
        Matter.Body.setPosition(this.body, Matter.Vector.create(x,y))
    }

    setRestitution(restitution) {
        this.body.restitution = restitution;
    }

    setFriction(friction) {
        this.body.friction = friction
    }

    setTimescale(timescale) {
        this.body.timeScale = timescale
    }

    setStatic(isStatic) {
        Matter.Body.setStatic(isStatic)
    }

}