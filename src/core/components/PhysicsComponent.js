import Component from "../Component";

import Matter from "matter-js";

export default class PhysicsComponent extends Component {

    constructor(type, params = { is_static: false, x: 0.0, y: 0.0, w: 32.0, h: 32.0 }) {
        super();

        this.name = "physics"

        this.body = null;
        this.params = params 
        this.type = type
    }

    static sprite() {
        let physicsComponent = new PhysicsComponent();
    }

    create() {
        if(this.type == 'rect') {
            this.body = Matter.Bodies.rectangle(this.params.x, this.params.y, this.params.w, this.params.h, {
                isStatic: this.params.is_static
            })
        }
        else if(this.type == 'sprite') {
            // create body out of sprites size
        }
    
        if(this.body == null) {
            console.log('[PhysicsComponent]: body is null, did you pass correct type?')
            return;
        }
        
        this.getSystem().getSystemComponent("physics").addBody(this.body)
    }

    update(dt) {

        super.update(dt);

        // TODO: set body position to transform :)
        if(this.body != null) {
            let transform = this.getEntity().getComponent("transform");

            transform.position.x = this.body.position.x 
            transform.position.y = this.body.position.y 
            transform.rotation = this.body.angle

 
            
        }

        

    }

}