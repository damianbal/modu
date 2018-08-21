/**
 * Entity
 */

export default class Entity {

    constructor() {
        this.components = [];
        this.tag = "Entity";
        this.name = "Entity";
        this.layer = 0
        this.remove = false
    }

    removeEntity() {
        this.remove = true
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
        // component.create() // created in addEntity :)

        configureComponent(component)
    }

    addComponents(components, configureComponent = (component) => {}) {
        components.forEach(component => {
            this.addComponent(component, configureComponent)
        })
    }

    update(dt) {

        this.components.forEach(c => {
            c.update(dt)
        })

    }

    /**
     * Called when collision between this entity
     * and other entity starts
     * 
     * @param {Entity} entity 
     */
    onCollisionStart(entity) {
       
    }

    /**
     * Called when collision between this entity 
     * and other entity is active
     * 
     * @param {Entity} entity 
     */
    onCollisionActive(entity) {

    }

    /**
     * Called when collision between this entity
     * and other entity ended but was active 
     * 
     * @param {Entity} entity 
     */
    onCollisionEnd(entity) {
        
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
    }

    getSystem() {
        return this.system
    }

    destroy() {
        this.components.forEach(c => c.destroy())
    }

}