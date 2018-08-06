import EntityBuilder from "../core/utils/EntityBuilder";
import TransformComponent from "../core/components/TransformComponent";
import SpriteComponent from "../core/components/SpriteComponent";
import ControllerComponent from "../core/components/ControllerComponent";
import PhysicsComponent from "../core/components/PhysicsComponent";

/**
 * Create your entities here.
 */
export default class EntityFactory {

    static createBall(system, x = 100.0, y = 100.0) {

        let e = EntityBuilder.builder(system)
        .addComponent(new TransformComponent({
            x, y
        }))
        .addComponent(new SpriteComponent("assets/ball.png"))
        .addComponent(PhysicsComponent.sprite(false), (component) => {
            // blah ;)
            component.setVelocity(5.0, -5.0)
        });

        return e.get();

    }

    static sprite(system, image, x = 0, y = 0, is_static = false) {
        return EntityBuilder.builder(system).addComponent(new TransformComponent({x,y}))
        .addComponent(new SpriteComponent(image))
        .addComponent(PhysicsComponent.sprite(is_static)).get()
    }

    static ground(system, x = 400.0, y = 700.0) {
        return EntityBuilder.builder(system).addComponent(new TransformComponent({x,y}))
        .addComponent(new SpriteComponent("assets/ground.png"))
        .addComponent(PhysicsComponent.sprite(true)).get()
    }

    static createBox(system, x = 10.0, y = 10.0, is_static) {
        //let pc = PhysicsComponent.rect(140, 140, is_static)
        let pc = PhysicsComponent.sprite(is_static)
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