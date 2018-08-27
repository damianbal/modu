import Loader from "./Loader";
import RenderingSystemComponent from "./system_components/RenderingSystemComponent";
import PhysicsSystemComponent from "./system_components/PhysicsSystemComponent";
import { Vec2 } from "./utils/MathUtils";

/**
 * System
 */

export class System {

    constructor() {
        this.entities = []
        this.system_components = []
        this.manager = null

        this.loader = new Loader()


        /*
        window.addEventListener("keydown", event => {
            this.onKeyDown(event.keyCode)
            event.preventDefault()
        }, false)

        window.addEventListener("keyup", event => {
            this.onKeyUp(event.keyCode)
            event.preventDefault()
        })
        */
    }

    getManager() {
        return this.manager
    }

    preload() {
        // load assets with this.loader.add
    }

    create() {
        this.rendering = new RenderingSystemComponent()

        this.physics = new PhysicsSystemComponent()

        this.addSystemComponent(this.rendering)
        this.addSystemComponent(this.physics)

        // this.preload();
        // this.loader.load(this.setup.bind(this))
        this.setup()
    }

    /**
     * Called after creating components, you can safely setup 
     * your components, entities here
     */
    setup() {
        // add entities, etc...
    }

    /**
     * Called when entity is clicked
     * @param {Entity} entity 
     */
    onClickEntity(entity) {

    }

    /**
     * Called when key is down
     * 
     * @param {integer} key 
     */
    onKeyDown(key) {
        // handle key down
        this.entities.forEach(entity => entity.onKeyDown(key))
    }

    /**
     * Called when mouse right button is pressed, 
     * you can access mouse position with getMousePosition
     */
    onMouseDown(position) {
        this.entities.forEach(entity => entity.onMouseDown(position))
    }

    /**
     * Called when mouse is moved,
     * you can access mouse position with getMousePosition
     */
    onMouseMove() {

    }

    /**
     * Called when key is up
     * 
     * @param {integer} key 
     */
    onKeyUp(key) {
        // handle key up
        this.entities.forEach(entity => entity.onKeyUp(key))
    }

    /**
     * Add system component to this system
     * 
     * @param {SystemComponent} component 
     */
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

        // create components
        entity.components.forEach(component => {
            component.create()
        })

        this.entities.push(entity)
    }

    /**
     * Destroys entity, do not call it, use removeEntity method
     * on Entity instances
     * 
     * @param {Entity} entity 
     */
    removeEntity(entity) {
        this.entities.forEach((e, index) => {
            if (e == entity) {
                entity.destroy()
                this.entities.splice(index, 1)
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

    /**
     * Return system component by name
     * 
     * @param {string} name 
     */
    getSystemComponent(name) {
        let sc = this.system_components.find(sc => sc.name == name)
 
        if(sc == undefined) {
            console.warn('System component not found: ' + name)
            return;
        }

        return sc;
    }

    /**
     * Update all entities and its components
     * 
     * @param {float} dt 
     */
    updateEntitiesAndComponents(dt) {

        // update system components
        this.system_components.forEach(sc => sc.update(dt))

        // update entities
        this.entities.forEach(entity => {
            entity.update(dt)
        })

    }

    /**
     * Update system
     * 
     * @param {float} dt 
     */
    update(dt) {
        // remove entities which should be removed
        this.entities.forEach(entity => {
            if(entity._remove) {
                this.removeEntity(entity)
            }
        })

        this.updateEntitiesAndComponents(dt)
    }

    getWidth() {
        return this.rendering.app.renderer.width 
    }

    getHeight() {
        return this.rendering.app.renderer.height
    }

    getMousePosition() {
        if(!this.rendering) return Vec2.create(0,0) 

        return this.rendering.getMousePosition()
    }

}