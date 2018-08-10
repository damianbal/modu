/**
 * Entity
 */

export default class Entity {

    constructor() {
        this.components = [];
        this.tag = "Entity";
        this.name = "Entity";
        this.layer = 0
    }

    create() {
        // TODO: create all components 

        this.setup();
    }

    /**
     * Setup your entity here, including its components
     */
    setup() {

    }

    addComponent(component, configureComponent = (component) => {}) {
        this.components.push(component)

        component.setEntity(this)
        component.create()

        configureComponent(component)
    }

    update(dt) {

        this.components.forEach(c => {
            c.update(dt)
        })

    }

    /**
     * Called when keyboard key is up
     * @param {integer} key 
     */
    onKeyUp(key) {
        // key up
    }

    /**
     * Called when keyboard key is down
     * @param {integer} key 
     */
    onKeyDown(key) {
        // key down
    }

    /**
     * Called when entity is clicked, 
     * needs SpriteComponent to work
     */
    onClick() {
        
    }

    hasComponent(name) {

        return this.components.filter(c => {
            return c.name == name
        }).length > 0

    }

    getComponent(name) {
        return this.components.filter(c => {
            return c.name == name;
        })[0]
    }

    setSystem(sys) {
        this.system = sys

        // this.create(); // create here because some components might need system
    }

    getSystem() {
        return this.system
    }

    destroy() {
        this.components.forEach(c => c.destroy())
    }

}