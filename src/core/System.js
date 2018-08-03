/**
 * System
 */

export class System {

    constructor() {
        this.entities = []
        this.system_components = []
    }

    addSystemComponent(component) {
        component.system = this
        this.system_components.push(component)
        component.create(this)
    }

    /**
     * Add entity to system
     * @param {Entity} entity 
     */
    addEntity(entity) {
        entity.system = this
        this.entities.push(entity)
        console.log('[System]: adding entity: #' + this.entities.length)
    }

    removeEntity(entity) {
        this.entities.forEach(e => {
            if (e === entity) {
                // TODO: remove
            }
        })
    }

    /**
     * Get all entities with tag
     * 
     * @param {string} tag 
     */
    getByTag(tag) {
        return this.entities.filter(e => {
            return e.tag == tag
        })
    }

    /**
     * Returns all entities which are named with name
     * 
     * @param {string} name 
     */
    getByName(name) {
        return this.entities.filter(e => {
            return e.name == name
        })
    }

    /**
     * Returns all entities which have component
     * 
     * @param {string} component 
     */
    getByComponent(component) {
        let entities = [];

        this.entities.forEach(e => {
            if (e.hasComponent(component)) entities.push(e);
        })

        return entities;
    }

    getSystemComponent(name) {
        return this.system_components.filter(sc => {
            return sc.name == name;
        })[0]
    }

    updateEntitiesAndComponents(dt) {

        // update system components
        this.system_components.forEach(sc => sc.update(dt))

        // update entities
        this.entities.forEach(entity => {
            entity.update(dt)
        })

    }

    update(dt) {
        this.updateEntitiesAndComponents(dt)
    }

}