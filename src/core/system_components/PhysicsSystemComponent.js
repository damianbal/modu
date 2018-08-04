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

        Matter.Engine.run(this.engine)
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