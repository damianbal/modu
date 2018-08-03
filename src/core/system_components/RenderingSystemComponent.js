import SystemComponent from "../SystemComponent";

import * as PIXI from "pixi.js"

export default class RenderingSystemComponent extends SystemComponent {

    create(system) {

        this.name = "rendering"

        this.layers = []

        this.app = new PIXI.Application({
            width: 1024,
            height: 720,
            antialias: true,
            transparent: false,
            resolution: 1
        })

        this.app.renderer.backgroundColor = 0xF5F5F5

        for (let i = 0; i < 10; i++) {
            let layer = new PIXI.Container()
            this.app.stage.addChild(layer)
            this.layers[i] = layer
        }

        document.body.appendChild(this.app.view)
    }

    getLayer(index) {
        return this.layers[index]
    }

}