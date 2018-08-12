import Loader from "./Loader";

export default class SystemManager {

    constructor(config = {
        width: 1024,
        height: 720
    }) {
        this.systems = [];
        this.currentSystem = null;
        let w = config.width;
        let h = config.height;

        this.onLoad = () => {}

        // create pixi app
        this.app = new PIXI.Application({
            width: w,
            height: h,
            antialias: true,
            transparent: false,
            resolution: 1
        })

        this.app.renderer.backgroundColor = 0xFF0000

        document.getElementById('modu').appendChild(this.app.view)

        window.addEventListener("keydown", event => {
            this.onKeyDown(event.keyCode)
            event.preventDefault()
        })

        window.addEventListener("keyup", event => {
            this.onKeyUp(event.keyCode)
            event.preventDefault()
        })

        this.loader = new Loader()
    }

    getApp() {
        return this.app
    }

    addSystem(name, system) {
        system.manager = this

        this.systems.push({
            name: name,
            sys: system
        })

        this.currentSystem = this.systems[0].sys
    }

    setSystem(name) {
        this.currentSystem.rendering.hide()

        this.currentSystem = this.systems.filter(sys => {
            return sys.name == name
        })[0].sys

        this.currentSystem.rendering.show()
    }

    getLoader() {
        return this.loader
    }

    create() {
        this.loader.load(this.loaded.bind(this))
    }

    loaded() {


        this.systems.forEach(sys => {
            sys.sys.create()
            sys.sys.rendering.hide();
            console.log('creating: ', sys.sys)
        })

        this.onLoad()
        this.app.ticker.add(this.update.bind(this))
    }

    onKeyDown(key) {
        if (this.currentSystem) {
            this.currentSystem.onKeyDown(key)
        }
    }

    onKeyUp(key) {
        if (this.currentSystem) {
            this.currentSystem.onKeyUp(key)
        }
    }

    update(dt) {
        if (this.currentSystem != null) {
            this.currentSystem.update(dt)
        }
    }

}