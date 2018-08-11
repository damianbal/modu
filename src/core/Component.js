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

    hasEntity() {
        return this.entity != null 
    }

    setEntity(entity) {
        this.entity = entity
    }

    getEntity() {
        return this.entity 
    }

    getSystem() {
        return this.entity.getSystem()
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