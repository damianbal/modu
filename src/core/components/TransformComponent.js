import Component from "../Component";

export default class TransformComponent extends Component {

    constructor(position = {x:10.0, y:10.0}) {
        super();

        this.name = "transform"

        this.position = position

        this.rotation = 0.0
    }

    update(dt) {
        super.update(dt)
    }

}