import PhysicsComponent from "./components/PhysicsComponent";

/**
 * Factory for Physics Components
 */
export default class PhysicsComponentFactory {
    
     /**
      * Create physics component of rect 
      * 
      * @param {integer} width 
      * @param {integer} height 
      * @param {boolean} isStatic 
      */
     static rect(width = 64, height = 64, isStatic = false) {
         let pc = new PhysicsComponent('rect', {
             isStatic,
             w: width,
             h: height
         })
         return pc
     }

     /**
      * Create physics component of sprites size
      * @param {boolean} isStatic 
      */
     static sprite(isStatic = false) {
         let pc = new PhysicsComponent('sprite', {
             isStatic,
             width: 0,
             height: 0
         })
         return pc
     }

     /**
      * Create physics component of circle, if radius is not passed then
      * circle radius will be size of a sprite width or height, whichever is bigger 
      * 
      * @param {float} radius 
      * @param {boolean} isStatic 
      */
     static circle(radius = null, isStatic = false) {
         if (radius == null) {
             return PhysicsComponent.circleSprite(isStatic)
         }

         let pc = new PhysicsComponent('circle', {
             w: radius,
             isStatic
         })
         return pc
     }

     /**
      * Create physics component of circle, radius is size of sprite
      * 
      * @param {boolean} isStatic 
      */
     static circleSprite(isStatic = false) {
         let pc = new PhysicsComponent('circle_sprite', {
             w: 0,
             isStatic
         })
         return pc
     }

}