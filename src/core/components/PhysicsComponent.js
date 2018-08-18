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
    }

    /**
     * Create physics component of rect 
     * 
     * @param {integer} width 
     * @param {integer} height 
     * @param {boolean} isStatic 
     */
    static rect(width = 64, height = 64, isStatic = false) {
        let pc = new PhysicsComponent('rect', {
            isStatic,
            w: width,
            h: height
        })
        return pc
    }

    /**
     * Create physics component of sprites size
     * @param {boolean} isStatic 
     */
    static sprite(isStatic = false) {
        let pc = new PhysicsComponent('sprite', {
            isStatic,
            width: 0,
            height: 0
        })
        return pc
    }

    /**
     * Create physics component of circle, if radius is not passed then
     * circle radius will be size of a sprite width or height, whichever is bigger 
     * 
     * @param {float} radius 
     * @param {boolean} isStatic 
     */
    static circle(radius = null, isStatic = false) {
        if(radius == null) {
            return PhysicsComponent.circleSprite(isStatic)
        }

        let pc = new PhysicsComponent('circle', {
            w: radius,
            isStatic
        })
        return pc
    }

    static circleSprite(isStatic = false) {
        let pc = new PhysicsComponent('circle_sprite', {
            w: 0, 
            isStatic
        })
        return pc
    }

    create() {
        let transform = this.getEntity().getComponent("transform");

        let s = this.getEntity().getComponent("sprite");

        console.log('Sprite component (physics): ', s.getWidth())

        if (this.type == 'rect') {
            this.body = Matter.Bodies.rectangle(transform.position.x, transform.position.y, this.params.w, this.params.h, {
                isStatic: this.params.isStatic
            })
        } else if (this.type == 'sprite') { // TODO: sprite as circle as well?
            this.body = Matter.Bodies.rectangle(transform.position.x, transform.position.y, s.getWidth(), s.getHeight(), {
                isStatic: this.params.isStatic
            })
        } else if (this.type == 'circle') {
            this.body = Matter.Bodies.circle(transform.position.x, transform.position.y, this.params.w, {
                isStatic: this.params.isStatic
            })
        }
        else if(this.type == 'circle_sprite') {
            let radius = s.getWidth() > s.getHeight() ? s.getWidth() : s.getHeight();
            this.body = Matter.Bodies.circle(transform.position.x, transform.position.y, radius, {
                isStatic: this.params.isStatic,
            })
        }

        if (this.body == null) {
            console.log('[PhysicsComponent]: body is null, did you pass correct type?')
            return;
        }

        if (this.body) {
            this.body.entity = this.getEntity()
        }

        this.getSystem().getSystemComponent("physics").addBody(this.body)

        console.log("Created physics component", this.body)
    }

    update(dt) {

        super.update(dt);



        // TODO: set body position to transform :)
        if (this.body != null) {
            let transform = this.getEntity().getComponent("transform");

            transform.position.x = this.body.position.x
            transform.position.y = this.body.position.y
            transform.rotation = this.body.angle

        }



    }

    destroy() {
        
    }

    setMass(mass) {
        Matter.Body.setMass(this.body, mass)
    }

    setVelocity(x, y) {
        Matter.Body.setVelocity(this.body, Matter.Vector.create(x, y))
    }

    setVelocityX(x) {
        Matter.Body.setVelocity(this.body, Matter.Vector.create(x, this.body.velocity.y))
    }

    setVelocityY(y) {
        Matter.Body.setVelocity(this.body, Matter.Vector.create(this.body.velocity.x, y))
    }

    applyForce(force, position = null) {

        let fm = Vec2.create(force.x * this.body.mass, -force.y * this.body.mass)

        let pos = this.body.position

        if (position != null) {
            pos = position
        }

        Matter.Body.applyForce(this.body, pos, fm)
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

    setPosition(x, y) {
        Matter.Body.setPosition(this.body, Matter.Vector.create(x, y))
    }

    /**
     * Use TransformComponent to get position
     */
    getPosition() {
        return this.body.position
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

    scale(x = 1, y = 1) {
        Matter.Body.scale(this.body, x, y)
    }

    rotate(rotation) {
        Matter.Body.rotate(this.body, rotation)
    }

    setAngle(angle) {
        Matter.Body.setAngle(this.body, angle)
    }

    translate(translation) {
        Matter.Body.translate(this.body, translation)
    }

}