import MenuSystem from "./systems/MenuSystem";
import GameSystem from "./systems/GameSystem";

const systems = [
    {
        name: 'menu',
        system: new MenuSystem()
    },
    {
        name: 'game',
        system: new GameSystem()
    }
]

export const defaultSystem = 'game'

export default systems