/**
 * Entity
 */

export default class Entity {

    constructor() {
        this.components = [];
        this.tag = "Entity";
        this.name = "Entity";
        this.layer = 0
        this._remove = false
    }

    /**
     * Remove entity from system
     */
    remove() {
        this._remove = true
    }

    /**
     * Called by system to create entity
     */
    create() {
        // TODO: create all components 

        this.setup();
    }

    /**
     * Setup your entity here, including its components
     */
    setup() {

    }

    /**
     * Add component to entity
     * 
     * @param {string} component 
     * @param {*} configureComponent 
     */
    addComponent(component, configureComponent = (component) => {}) {
        this.components.push(component)

        component.setEntity(this)
        // component.create() // created in addEntity :)

        configureComponent(component)
    }

    /**
     * Add components to entity
     * 
     * @param {array} components 
     * @param {*} configureComponent 
     */
    addComponents(components) {
        components.forEach(component => {
            this.addComponent(component)
        })
    }

    /**
     * Update entity
     * 
     * @param {float} dt 
     */
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

    /**
     * Called when right mouse is clicked (not on that Entity, anywhere)
     */
    onMouseDown(position) {

    }

    /**
     * Check if entity has component
     * 
     * @param {string} name 
     */
    hasComponent(name) {

        return this.components.filter(c => {
            return c.name == name
        }).length > 0

    }

    /**
     * Get component
     * 
     * @param {string} name 
     */
    getComponent(name) {
        return this.components.filter(c => {
            return c.name == name;
        })[0]
    }

    /**
     * Set system that this entity belongs to
     * Note: called by system, do not use it
     * 
     * @param {System} sys 
     */
    setSystem(sys) {
        this.system = sys
    }

    /**
     * Return system that this entity belongs to
     */
    getSystem() {
        return this.system
    }

    /**
     * Destroy all the components
     */
    destroy() {
        this.components.forEach(c => c.destroy())
    }

}