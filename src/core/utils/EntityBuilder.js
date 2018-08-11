import Entity from "../Entity";

/**
 * EntityBuilder allows to create Entity on the fly without class,
 * might be useful for some small entities which are only displayed?
 * Do not use this for something which you know that is going to be
 * complicated, then use class approach instead.
 */
export default class EntityBuilder {

    constructor(system) {
        this.entity = new Entity()
        this.entity.system = system
    }

    static builder(system) {
        return new EntityBuilder(system)
    }

    setName(name) {
        this.entity.name = name

        return this
    }

    setTag(tag) {
        this.entity.tag = tag

        return this
    }

    setLayer(index) {
        this.entity.layer = index
    }

    addComponent(c, configureComponent = (component) => {}) {
        this.entity.addComponent(c)

        c.setEntity(this.entity)

        configureComponent(c)

        return this
    }

    get() {
        return this.entity
    }

}