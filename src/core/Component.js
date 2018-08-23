/**
 * Component
 */

export default class Component {

    /**
     * Create component here, 
     * pass only settings to constructor and then create 
     * component with passed settings 
     */
    create() {
        
    }

    /**
     * Called when entity is destroyed
     */
    destroy() {
        // destroy component
    }

    /**
     * Is entity set?
     */
    hasEntity() {
        return this.entity != null 
    }

    /**
     * Set entity 
     * Note: don't call it, it is called by system
     * @param {Entity} entity 
     */
    setEntity(entity) {
        this.entity = entity
    }

    /**
     * Returns entity which owns that component
     * 
     */
    getEntity() {
        return this.entity 
    }

    /**
     * Returns system which that entity belongs to
     */
    getSystem() {
        return this.entity.getSystem()
    }

    /**
     * Returns component of entity
     * 
     * @param {string} name 
     */
    getComponentOfEntity(name) {
        return this.entity.getComponent(name)
    }

    /**
     * Called to update component,
     * components logic goes here 
     * 
     * @param {float} dt 
     */
    update(dt)  {
        
    }

}