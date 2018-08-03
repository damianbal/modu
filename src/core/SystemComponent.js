/**
 * SystemComponents can extend System,
 * can access whole System, System's entities, etc...
 */
export default class SystemComponent {

    create() {
        this.name = "system"
    }

    update(dt) {

    }

}