import { System } from "../../core/System";
import RenderingSystemComponent from "../../core/system_components/RenderingSystemComponent";
import EntityFactory from "../EntityFactory";
import PhysicsSystemComponent from "../../core/system_components/PhysicsSystemComponent";
import { Keys } from "../../core/Input";

export default class GameSystem extends System {

    constructor() {
        super();

        // create rendering component
        let rendering = new RenderingSystemComponent()

        // add rendering component to system
        this.addSystemComponent(rendering)

        // create physics 
        let physics = new PhysicsSystemComponent();
        this.addSystemComponent(physics)


        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                // add entity
                let entity = EntityFactory.createSpriteEntity(this, 125 + (i * 64.0), 100.0 + (j * 64.0) + i*10.0)

                this.addEntity(entity)
            }
        }


        for(let i = 0; i < 3; i++) {
            //let ground = EntityFactory.createSpriteEntity(this, 100.0 + (64.0 * i), 600.0 + (i * 10.0), true)
            let ground = EntityFactory.createBox(this, 100.0 + (148.0 * i), 600.0 + (i * 15.0), true)

            this.addEntity(ground)
        }


        let box = EntityFactory.createBox(this, 100.0, -200.0, false);
        this.addEntity(box);

        box.getComponent("physics").setFriction(0.5);

        let box2 = EntityFactory.createBox(this, 150.0, -200.0, false);
        this.addEntity(box2);

        box2.getComponent("physics").setFriction(0.5);

        this.player = EntityFactory.createBox(this, 150, 0, false);
        this.addEntity(this.player)

        // add the loop
        rendering.app.ticker.add(this.update.bind(this))
    }

    onKeyUp(key) {
        if(key == Keys.SPACE) {
            let box2 = EntityFactory.createBox(this, 150.0, -200.0, false);
            this.addEntity(box2);
        }

        if(key == Keys.UP) {
            let entity = EntityFactory.createSpriteEntity(this, 100.0 + Math.floor(Math.random() * 100.0), 100.0 , false)

            this.addEntity(entity)
        }

        if(key == Keys.LEFT) {
                this.player.getComponent("physics").setAngularVelocity(0.2)
        }

        if(key == Keys.RIGHT) {
            this.player.getComponent("physics").setPosition(150.0, 0);
        }
    }

    onKeyDown(key) {
        if(key == Keys.LEFT) {
            
        }
    }

    update(dt) {
        super.update(dt);
    }

}