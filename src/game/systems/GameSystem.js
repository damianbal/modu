import { System } from "../../core/System";
import RenderingSystemComponent from "../../core/system_components/RenderingSystemComponent";
import EntityFactory from "../EntityFactory";

export default class GameSystem extends System {

    constructor() {
        super();

        // create rendering component
        let rendering = new RenderingSystemComponent()

        // add rendering component to system
        this.addSystemComponent(rendering)
        
        // add entity
        let entity = EntityFactory.createSpriteEntity(this)

        // add the loop
        rendering.app.ticker.add(this.update.bind(this))
    }

    update(dt) {
        super.update(dt);
    }

}