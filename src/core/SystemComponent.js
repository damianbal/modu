/**
 * SystemComponents can extend System,
 * can access whole System, System's entities, etc...
 */
export default class SystemComponent {

    /**
     * Create system component
     */
    create() {
        this.name = "system"
    }

    /**
     * Update system component
     * 
     * @param {float} dt 
     */
    update(dt) {

    }

}