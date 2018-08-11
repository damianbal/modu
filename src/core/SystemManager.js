
export default class SystemManager {

    constructor(app) {
        // add event listeners
        // load resources
        // init :)
        this.systems = [];
        this.currentSystem = null;
        this.app = app

        window.addEventListener("keydown", event => {
            this.onKeyDown(event.keyCode)
            event.preventDefault()
        })

        window.addEventListener("keyup", event => {
            this.onKeyUp(event.keyCode)
            event.preventDefault()
        })
    }

    addSystem(name, system) {
        this.systems[name] = system
    }

    setSystem(name) {
        if(this.currentSystem == null) {
            console.error("System not found: " + name)
            return;
        }

        this.currentSystem = this.systems[name]
    }

    create() {
        this.app.ticker.add(this.update.bind(this))
    }


    onKeyDown(key) {
        if(this.currentSystem) {
            this.currentSystem.onKeyDown(key)
        }
    }

    onKeyUp(key) {
        if(this.currentSystem) {
            this.currentSystem.onKeyUp(key)
        }
    }

    update(dt) {
        if(this.currentSystem) {
            this.currentSystem.update(dt)
        }
    }

}