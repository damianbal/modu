import SystemComponent from "../SystemComponent";

import Matter from "matter-js"

/**
 * 
 * @extends SystemComponent
 */
export default class PhysicsSystemComponent extends SystemComponent {

    create(system) {
        this.name = "physics"

        this.engine = Matter.Engine.create()

        this.world = this.engine.world

        // setup events
        Matter.Events.on(this.engine, 'collisionStart', this._collisionStart.bind(this))
        Matter.Events.on(this.engine, 'collisionActive', this._collisionActive.bind(this))
        Matter.Events.on(this.engine, 'collisionEnd', this._collisionEnd.bind(this))

        Matter.Engine.run(this.engine)
    }



    _collisionStart(event) {
        event.pairs.forEach(pair => {
            if(pair.bodyA.entity) {
                pair.bodyA.entity.onCollisionStart(pair.bodyB.entity)
            }  

            if(pair.bodyB.entity) {
                pair.bodyB.entity.onCollisionStart(pair.bodyA.entity)
            }
        })
    }

    _collisionActive(event) {

    }

    _collisionEnd(event) {

    }

    setGravity(x, y) {
        this.world.gravity.x = x 
        this.world.gravity.y = y
    }

    setTimescale(timescale = 1.0) {
        this.engine.timing.timeScale = timescale
    }

    addBody(body) {
        Matter.World.add(this.world, body)
    }

    update(dt) {
        Matter.Engine.update(this.engine, dt)
    }

}