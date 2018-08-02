import EntityBuilder from "../core/utils/EntityBuilder";
import TransformComponent from "../core/components/TransformComponent";
import SpriteComponent from "../core/components/SpriteComponent";
import ControllerComponent from "../core/components/ControllerComponent";

/**
 * Create your entities here.
 */
export default class EntityFactory {

    /**
     * Create sprite entity.
     * 
     * @param {System} system 
     */
    static createSpriteEntity(system) {
        return EntityBuilder.builder(system)
        .addComponent(new TransformComponent({x: 100.0, y: 30.0}))
        .addComponent(new SpriteComponent("assets/box.png"))
        .addComponent(new ControllerComponent({x: 1.0, y: 0.0}))
        .get()
    }

}