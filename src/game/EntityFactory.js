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
            .addComponent(new SpriteComponent("assets/ball.png"))
            //.addComponent(PhysicsComponent.rect(64, 64, is_static))
            .addComponent(PhysicsComponent.circle(64.0-29.0, is_static))
            .get()
    }

    static createBox(system, x = 10.0, y = 10.0, is_static) {
        let pc = PhysicsComponent.rect(140,140,is_static);
        let e = EntityBuilder.builder(system)
        .addComponent(new TransformComponent({
            x,
            y
        }))
        .addComponent(new SpriteComponent("assets/box2.png"))
        //.addComponent(PhysicsComponent.rect(64, 64, is_static))
        .addComponent(pc);


        return e.get();
        

    }

}