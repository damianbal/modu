import MenuSystem from "./systems/MenuSystem";
import GameSystem from "./systems/GameSystem";
import GameOverSystem from "./systems/GameOverSystem";

const systems = [
    {
        name: 'menu',
        system: new MenuSystem()
    },
    {
        name: 'game',
        system: new GameSystem()
    },
    {
        name: 'gameOver', 
        system: new GameOverSystem()
    }
]

export const defaultSystem = 'game'

export default systems