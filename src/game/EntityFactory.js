import EntityBuilder from "../core/utils/EntityBuilder";
import TransformComponent from "../core/components/TransformComponent";
import SpriteComponent from "../core/components/SpriteComponent";
import ControllerComponent from "../core/components/ControllerComponent";
import PhysicsComponent from "../core/components/PhysicsComponent";
import MathUtils from "../core/utils/MathUtils";
import PhysicsComponentFactory from "../core/PhysicsComponentFactory";

/**
 * Create your entities here.
 */
export default class EntityFactory {

    static createBG(system,x,y) {
        let e = EntityBuilder.builder(system).addComponent(
            new TransformComponent({x,y})
        ).addComponent(new SpriteComponent("assets/bg.png"))
        .setTag("BG")

        return e.get()
    }

    static createBall(system, x = 100.0, y = 100.0) {

        let e = EntityBuilder.builder(system)
        .addComponent(new TransformComponent({
            x, y
        }))
        .addComponent(new SpriteComponent("assets/spaceship.png"))
        .addComponent(PhysicsComponentFactory.circle(32.0, false), (component) => {
            // blah ;)
           // component.setVelocity(5.0, -1.0)
        })
        .addComponent(new ControllerComponent())

        e.setTag("spaceship")

        return e.get();

    }

    static blood(system, x = 0, y = 0) {
        let t = new TransformComponent({x,y})
        t.rotation = MathUtils.random(0,360)

                return EntityBuilder.builder(system).addComponent(
          t
                    ).addComponent(new SpriteComponent("assets/blood.png")).setTag("Blood").get()
    }

    static building(system, x = 0, y = 0)
    {
        return EntityBuilder.builder(system).addComponent(
            new TransformComponent({x, y})
        ).addComponent(new SpriteComponent("assets/building.png"))
        .addComponent(PhysicsComponentFactory.sprite(true)).setTag("Building").get()
    }

    static sprite(system, image, x = 0, y = 0, is_static = false) {
        return EntityBuilder.builder(system).addComponent(new TransformComponent({x,y}))
        .addComponent(new SpriteComponent(image))
        .addComponent(PhysicsComponentFactory.sprite(is_static)).setTag("sprite").get()
    }

    static ground(system, x = 400.0, y = 700.0) {
        return EntityBuilder.builder(system).addComponent(new TransformComponent({x,y}))
        .addComponent(new SpriteComponent("assets/ground.png"))
        .addComponent(PhysicsComponentFactory.sprite(true)).setTag("ground").get()
    }

    static createWall(system, x = 0, y = 0, w = 1000, h = 32) {
        return EntityBuilder.builder(system).addComponent(new TransformComponent({x,y}))
        .addComponent(new SpriteComponent("assets/building.png", w, h), (component) => {
            component.setAlpha(0.0)
        })
        .addComponent(PhysicsComponentFactory.sprite(true)).setTag("wall").get()
    }

    static createBox(system, x = 10.0, y = 10.0, is_static, w = 0, h = 0) {
        //let pc = PhysicsComponent.rect(140, 140, is_static)
        let pc = PhysicsComponent.sprite(is_static)
        let e = EntityBuilder.builder(system)
        .addComponent(new TransformComponent({
            x,
            y
        }))
        .addComponent(new SpriteComponent("assets/box2.png", w, h))
        //.addComponent(PhysicsComponent.rect(64, 64, is_static))
        .addComponent(pc);


        return e.get();
        

    }

}