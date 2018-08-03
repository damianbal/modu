import EntityBuilder from "../core/utils/EntityBuilder";
import TransformComponent from "../core/components/TransformComponent";
import SpriteComponent from "../core/components/SpriteComponent";
import ControllerComponent from "../core/components/ControllerComponent";
import PhysicsComponent from "../core/components/PhysicsComponent";

/**
 * Create your entities here.
 */
export default class EntityFactory {

    /**
     * Create sprite entity.
     * 
     * @param {System} system 
     */
    static createSpriteEntity(system, x = 10.0, y = 10.0, is_static = false) {
        return EntityBuilder.builder(system)
            .addComponent(new TransformComponent({
                x,
                y
            }))
            .addComponent(new SpriteComponent("assets/box.png"))
            .addComponent(new PhysicsComponent('rect', {
                x: x, y: y, is_static: is_static, w: 64.0, h: 64.0
            }))
            .get()
    }

}