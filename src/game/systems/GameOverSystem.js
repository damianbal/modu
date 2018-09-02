import EntityBuilder from "../../core/utils/EntityBuilder";
import SpriteComponent from "../../core/components/SpriteComponent";
import TransformComponent from "../../core/components/TransformComponent";
import {
    System
} from "../../core/System";
import {
    Keys
} from "../../core/Input";

import TextEntity from "../../core/entities/TextEntity";
import {
    Vec2
} from "../../core/utils/MathUtils";

export default class GameOverSystem extends System {

    constructor() {
        super();
    }

    onKeyUp(key) {
        super.onKeyUp(key)

        if (key == Keys.SPACE) {
            this.getManager().setSystem('game')
        }
    }

    setup() {
        super.setup()

        this.rendering.setBackgroundColor(0x000000)

        let text = new TextEntity("Game over", Vec2.create(this.getWidth() / 2, this.getHeight() / 2))

        this.addEntity(text)
    }

}