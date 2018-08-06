import { System } from "../../core/System";
import RenderingSystemComponent from "../../core/system_components/RenderingSystemComponent";
import EntityFactory from "../EntityFactory";
import PhysicsSystemComponent from "../../core/system_components/PhysicsSystemComponent";
import { Keys } from "../../core/Input";
import EntityBuilder from "../../core/utils/EntityBuilder";

export default class GameSystem extends System {

    constructor() {
        super();

        // create rendering component
        this.rendering = new RenderingSystemComponent()

        // add rendering component to system
        this.addSystemComponent(this.rendering)

        // create physics 
        let physics = new PhysicsSystemComponent();
        this.addSystemComponent(physics)
    }

    preload() {
        this.loader.add("assets/ball.png")
        this.loader.add("assets/box2.png")
        this.loader.add("assets/bullet.png")
        this.loader.add("assets/ground.png")
        this.loader.add("assets/modu-logo.png")
    }

    setup() {
        alert('Setup!')

        let e = EntityFactory.createBox(this, 105.0, 50.0, false)

        this.addEntity(e)

        let e2 = EntityFactory.createBox(this, 50.0, 500.0, true)

        this.addEntity(e2)

        this.addEntity(EntityFactory.createBall(this, 60.0, -50.0))

        this.addEntity(EntityFactory.ground(this))

        this.addEntity(EntityFactory.sprite(this, "assets/modu-logo.png", 100, 0, false))

        this.rendering.app.ticker.add(this.update.bind(this))
    }

    onKeyUp(key) {
        if(key == Keys.SPACE) {
            let box2 = EntityFactory.createBox(this, 150.0, -200.0, false);
            this.addEntity(box2);
        }
    }

    onKeyDown(key) {

    }

    update(dt) {
        super.update(dt);
    }

}