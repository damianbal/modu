import SystemComponent from "../SystemComponent";

import * as PIXI from "pixi.js"
import { Vec2 } from "../utils/MathUtils";

export default class RenderingSystemComponent extends SystemComponent {

    static createPIXI(width = 1024 , height = 720) {
        let app = new PIXI.Application({
            width,
            height,
            antialias: true,
            transparent: false,
            resolution: 1
        })

        return app
    }

    create(system) {

        this.name = "rendering"

        this.layers = []

        // Old
        //this.app = RenderingSystemComponent.createPIXI()
        //document.getElementById('modu').appendChild(this.app.view)

        this.app = system.getManager().getApp()
        this.app.renderer.backgroundColor = 0xF5F5F5

        for (let i = 0; i < 10; i++) {
            let layer = new PIXI.Container()
            this.app.stage.addChild(layer)
            this.layers[i] = layer
        }

        this.app.stage.interactive =true
        this.app.stage.mousedown = (e) => {
            
            console.log(this.system)
           this.system.onMouseDown()
        }
 
    }

    setApp(app) {
        this.app = app
    }

    hide() {
        this.layers.forEach(layer => {
            layer.visible = false
        })
    }

    show() {
        this.layers.forEach(layer => {
            layer.visible = true
        })
    }

    setBackgroundColor(color) {
            this.app.renderer.backgroundColor = color
    }

    /**
     * Returns global mouse position
     * 
     * @return Vec2
     */
    getMousePosition() {
        let mx = this.app.renderer.plugins.interaction.mouse.global.x 
        let my = this.app.renderer.plugins.interaction.mouse.global.y
        return Vec2.create(mx, my)
    }

    getLayer(index) {
        return this.layers[index]
    }

}