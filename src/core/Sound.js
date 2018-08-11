import {Howl,Howler} from "howler"

export default class Sound {

    /**
     * Play sound
     * 
     * @param {string} source 
     * @param {float} volume 
     * @param {Vec2} position 
     */
    static play(source, volume = 1.0, position = null) {

        let s = new Howl({
            src: source,
            volume: volume
        })

        s.play()

        if(position != null) {
            s.pos(position.x, position.y, -1)
        }

    }

    /**
     * Play music
     * 
     * @param {string} source 
     * @param {float} volume 
     */
    static playMusic(source, volume = 0.5) {
        let s = new Howl({
            src: source, volume, loop: true
        })

        s.play()

        return s
    }


}