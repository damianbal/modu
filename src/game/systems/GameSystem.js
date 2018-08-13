import { System } from "../../core/System";
import RenderingSystemComponent from "../../core/system_components/RenderingSystemComponent";
import EntityFactory from "../EntityFactory";
import PhysicsSystemComponent from "../../core/system_components/PhysicsSystemComponent";
import { Keys } from "../../core/Input";
import EntityBuilder from "../../core/utils/EntityBuilder";
import Sound from "../../core/Sound";
import MathUtils, { Vec2 } from "../../core/utils/MathUtils";
import SpaceshipEntity from "../entities/SpaceshipEntity";
import WingManEntity from "../entities/WingMan";

export default class GameSystem extends System {

    constructor() {
        super();

        //this.physics.setGravity(0,0)
    }

    preload() {
        
        /*
        this.loader.add("assets/spaceship.png")
        this.loader.add("assets/spaceship-alt.png")
        this.loader.add("assets/ground.png")
        this.loader.add("assets/modu-logo.png")

        */
    }

    setup() {
        super.setup()

        this.spaceship = new SpaceshipEntity(Vec2.create(300, 300))

        this.addEntity(this.spaceship)

        //this.addEntity(EntityFactory.ground())

        // add top wall
        this.addEntity(EntityFactory.createWall(this, 500, 0, 1032, 16))
        this.addEntity(EntityFactory.createWall(this, 500, 720, 1032, 16))
        this.addEntity(EntityFactory.createWall(this, 0, 500, 16, 1000))
        this.addEntity(EntityFactory.createWall(this, 1024, 500, 16, 1000))

        //this.rendering.app.ticker.add(this.update.bind(this))

        this.wingMan = new WingManEntity(Vec2.create(100.0, 100.0))

        this.addEntity(this.wingMan)
    }

    onKeyUp(key) {
        if(key == Keys.F) {
            this.removeEntity(this.spaceship)
        }

        if(key == Keys.C) {
            this.spaceship = new SpaceshipEntity(Vec2.create( MathUtils.random(0, 400), MathUtils.random(0, 400) ))
            this.addEntity(this.spaceship)
        }
    }

    update(dt) {
        super.update(dt);
    }

}