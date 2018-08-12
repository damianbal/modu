import Component from "../Component";

export default class TransformComponent extends Component {

    static name() {
        return "transform"
    }

    constructor(position = {
        x: 10.0,
        y: 10.0
    }) {
        super();

        this.name = "transform"

        this.position = position

        this.rotation = 0.0
    }

    transform(x = 0, y = 0, rot = 0) {
        let transformComponent = new TransformComponent({
            x,
            y
        });
        transformComponent.rotation = rot
        return transformComponent
    }

    update(dt) {
        super.update(dt)

        // TODO: add camera position
    }

}