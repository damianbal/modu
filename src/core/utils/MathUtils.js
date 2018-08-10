import Matter from "matter-js"

class MathUtils {
    static degToRad(deg) {
        return deg * Math.PI / 180;
    }

    static radToDeg(rad) {
        return rad * 180 / Math.PI;
    }
}

export let Vec2 = Matter.Vector

export default MathUtils