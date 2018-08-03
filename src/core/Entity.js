/**
 * Entity
 */

export default class Entity {

    constructor() {
        this.components = [];
        this.tag = "Entity";
        this.name = "Entity";
    }

    addComponent(component) {
        // this.components[component.name] = component
        this.components.push(component)

        component.setEntity(this)
        component.create()
    }

    update(dt) {

        this.components.forEach(c => {
            c.update(dt)
        })

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

}