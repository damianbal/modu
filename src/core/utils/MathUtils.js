import Matter from "matter-js"

class MathUtils {
    static degToRad(deg) {
        return deg * Math.PI / 180;
    }

    static radToDeg(rad) {
        return rad * 180 / Math.PI;
    }

    static random(min, max) {
        return min + Math.floor((Math.random() * max))
    }
}

export let Vec2 = Matter.Vector

export default MathUtils