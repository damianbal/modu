import EntityBuilder from "../../core/utils/EntityBuilder";
import SpriteComponent from "../../core/components/SpriteComponent";
import TransformComponent from "../../core/components/TransformComponent";
import { System } from "../../core/System";
import { Keys } from "../../core/Input";
import TextEntity from "../../core/entities/TextEntity";
import { Vec2 } from "../../core/utils/MathUtils";

export default class MenuSystem extends System {

    constructor() {
        super();
    }

    onKeyUp(key) {
        super.onKeyUp(key)
        
        if(key == Keys.SPACE) {
            this.getManager().setSystem('game')
        }
    }

    setup() {
        super.setup()

        let text = new TextEntity("Press 'space' to start!", Vec2.create(this.getWidth() / 2, this.getHeight() / 2)) 

        this.addEntity(text) 
    }

}