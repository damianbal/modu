import SystemComponent from "../SystemComponent";

import * as PIXI from "pixi.js"

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

    getLayer(index) {
        return this.layers[index]
    }

}