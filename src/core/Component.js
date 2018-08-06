/**
 * Component
 */

export default class Component {

    create() {
        
    }

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

    update(dt)  {
        
    }

}