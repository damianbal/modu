import Component from "../Component";

import Matter from "matter-js";
import {
    Vec2
} from "../utils/MathUtils";

export default class PhysicsComponent extends Component {

    static name() {
        return "physics"
    }

    constructor(type, params = {
        isStatic: false,
        x: 0.0,
        y: 0.0,
        w: 32.0,
        h: 32.0
    }) {
        super();

        this.name = PhysicsComponent.name()

        this.body = null;
        this.params = params
        this.type = type
        this.sensor = false
    }


    create() {
        let transform = this.getEntity().getComponent("transform");

        // get sprite component
        let s = this.getEntity().getComponent("sprite");

        if(s) {
            console.log('Sprite component (physics): ', s.getWidth(), s.getHeight())
        }

        if (this.type == 'rect') {
            this.body = Matter.Bodies.rectangle(transform.position.x, transform.position.y, this.params.w, this.params.h, {
                isStatic: this.params.isStatic,
                isSensor: this.sensor
            })
        } else if (this.type == 'sprite') { 
            this.body = Matter.Bodies.rectangle(transform.position.x, transform.position.y, s.getWidth(), s.getHeight(), {
                isStatic: this.params.isStatic,
                isSensor: this.sensor
            })
        } else if (this.type == 'circle') {
            this.body = Matter.Bodies.circle(transform.position.x, transform.position.y, this.params.w, {
                isStatic: this.params.isStatic,
                isSensor: this.sensor
            })
        }
        else if(this.type == 'circle_sprite') {
            let radius = s.getWidth() > s.getHeight() ? s.getWidth() : s.getHeight();
            this.body = Matter.Bodies.circle(transform.position.x, transform.position.y, radius, {
                isStatic: this.params.isStatic,
                isSensor: this.sensor
            })
        }

        if (this.body == null) {
            console.log('[PhysicsComponent]: body is null, did you pass correct type?')
            return;
        }


        // pass reference of this entity to body
        if (this.body) {
            this.body.entity = this.getEntity()
        }

        // add body to world
        this.getSystem().getSystemComponent("physics").addBody(this.body)

        console.log("Created physics component", this.body)
    }

    /**
     * Updates transform component to have position and rotation of 
     * body so sprite can access it and display at correct position and rotation
     * 
     * @param {float} dt 
     */
    update(dt) {

        super.update(dt);

        if (this.body != null) {
            let transform = this.getEntity().getComponent("transform");

            transform.position.x = this.body.position.x 
            transform.position.y = this.body.position.y
            transform.rotation = this.body.angle

        }

    }

    /**
     * Set mass of body
     * 
     * @param {float} mass 
     */
    setMass(mass) {
        Matter.Body.setMass(this.body, mass)
    }

    /**
     * Set velocity
     * 
     * @param {float} x 
     * @param {float} y 
     */
    setVelocity(x, y) {
        Matter.Body.setVelocity(this.body, Matter.Vector.create(x, y))
    }

    /**
     * Set X velocity
     * 
     * @param {float} x 
     */
    setVelocityX(x) {
        Matter.Body.setVelocity(this.body, Matter.Vector.create(x, this.body.velocity.y))
    }

    /**
     * Set Y velocity
     * 
     * @param {float} y 
     */
    setVelocityY(y) {
        Matter.Body.setVelocity(this.body, Matter.Vector.create(this.body.velocity.x, y))
    }

    /**
     * Apply force
     * 
     * @param {Vec2} force 
     * @param {Vec2} position 
     */
    applyForce(force, position = null) {

        let fm = Vec2.create(force.x * this.body.mass, -force.y * this.body.mass)

        let pos = this.body.position

        if (position != null) {
            pos = position
        }

        Matter.Body.applyForce(this.body, pos, fm)
    }

    /**
     * Set angular velocity of body
     * 
     * @param {Vec2} velocity 
     */
    setAngularVelocity(velocity) {
        Matter.Body.setAngularVelocity(this.body, velocity)
    }

    /**
     * Set density
     * 
     * @param {float} density 
     */
    setDensity(density) {
        Matter.Body.setDensity(this.body, density)
    }

    /**
     * Set inertia
     * 
     * @param {float} inertia 
     */
    setInertia(inertia) {
        Matter.Body.setInertia(this.body, inertia)
    }

    /**
     * Set position of body
     * 
     * @param {float} x 
     * @param {float} y 
     */
    setPosition(x, y) {
        Matter.Body.setPosition(this.body, Matter.Vector.create(x, y))
    }

    /**
     * Use TransformComponent to get position
     */
    getPosition() {
        return this.body.position
    }

    /**
     * Restitution
     * 
     * @param {float} restitution 
     */
    setRestitution(restitution) {
        this.body.restitution = restitution;
    }

    /**
     * Friction
     * 
     * @param {float} friction 
     */
    setFriction(friction) {
        this.body.friction = friction
    }

    /**
     * Timescale, well you can speed up or slow down the body
     * 
     * @param {float} timescale 
     */
    setTimescale(timescale) {
        this.body.timeScale = timescale
    }

    /**
     * Set body to be static or no static
     * 
     * @param {boolean} isStatic 
     */
    setStatic(isStatic = true) {
        Matter.Body.setStatic(isStatic)
    }

    /**
     * Rotate body
     * 
     * @param {float} rotation 
     */
    rotate(rotation) {
        Matter.Body.rotate(this.body, rotation)
    }

    /**
     * Set angle in radians
     * @param {float} angle
     */
    setAngle(angle) {
        Matter.Body.setAngle(this.body, angle)
    }

    /**
     * Set is sensor
     * @param {boolean} sensor 
     */
    setIsSensor(sensor = true) {
        this.body.isSensor = sensor 
    }

    /**
     * Translate 
     * 
     * @param {Vec2} translation 
     */
    translate(translation) {
        Matter.Body.translate(this.body, translation)
    }

    destroy() {
        this.getSystem().getSystemComponent("physics")._removeBody(this.body)
    }

}