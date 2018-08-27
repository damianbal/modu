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
import Zombie from "../entities/Zombie";
import Player from "../entities/Player";
import Bullet from "../entities/Bullet";
import PoliceCar from "../entities/PoliceCar";

export default class GameSystem extends System {

    constructor() {
        super();

        this.wingMan = null
    }

    setup() {
        super.setup()

       this.physics.setGravity(0, 0)

 
        // add walls
        this.addEntity(EntityFactory.createWall(this, 500, 0, 1032, 16))
        this.addEntity(EntityFactory.createWall(this, 500, 720, 1032, 16))
        this.addEntity(EntityFactory.createWall(this, 0, 500, 16, 1000))
        this.addEntity(EntityFactory.createWall(this, 1024, 500, 16, 1000))


        this.addEntity(EntityFactory.createBG(this, this.getWidth() / 2, this.getHeight() / 2))

        this.addEntity(new PoliceCar(Vec2.create(100.0, 100.0)))

        // add player 
            //    this.addEntity(new Zombie(Vec2.create(100, 100)))
            this.player = new Player(Vec2.create(400, 400))

            this.addEntity(this.player)

        // add zombie
        for(let i = 0; i < 5; i++) {
            let z = new Zombie(Vec2.create(MathUtils.random(0, 800), MathUtils.random(0, 600)))
            this.addEntity(z)

            //this.physics.addConstraint({entityA: this.player, entityB: z, damping: 0.5, stiffness: 0.1})
        }


    this.rendering.setBackgroundColor(0x303030)
        
     //this.addEntity(EntityFactory.building(this, 600, 400))
      //this.addEntity(EntityFactory.building(this, 700, 400))
      
      for(let i = 0; i < 7; i++) {
          this.addEntity(EntityFactory.building(this, MathUtils.random(0, 800), MathUtils.random(0, 600)))
      }

      this.wingMan = new WingManEntity(Vec2.create(300,300))
      this.addEntity(this.wingMan)
    }

    addBlood(x, y) {
        this.addEntity(EntityFactory.blood(this, x, y))
    }

    addBullet(position, rotation, shooter = null) {
      let b = new Bullet(position, rotation)
      b.shooter = shooter
        this.addEntity(b)
        Sound.play('assets/sfx/bullet.wav')
    }

    onMouseDown(position) {
        super.onMouseDown(position)

        this.addBullet(this.player.transform.position, this.player.controller.rotation, this.player)
    }

    onKeyUp(key) {
        super.onKeyUp(key)

        if(key == Keys.P) {
            this.wingMan.getComponent("animator").play("wing")
        }
    }

    update(dt) {
        super.update(dt);
    }

}