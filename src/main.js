/**
 * Define your assets in game/Assets.js and systems in game/Systems.js
 * 
 * 
 */
import GameSystem from "./game/systems/GameSystem";
import SystemManager from "./core/SystemManager";
import MenuSystem from "./game/systems/MenuSystem";
import assets from "./game/Assets";
import systems, { defaultSystem } from "./game/Systems";


// System Manager
let systemManager = new SystemManager()

// Load Assets
systemManager.getLoader().addImages(assets)

// Add systems to system manager
systems.forEach(sys => {
    systemManager.addSystem(sys.name, sys.system)
})

// Create all systems
systemManager.create()

// When Everything has been loaded set default system
systemManager.onLoad = () => {
    systemManager.setSystem(defaultSystem)
}