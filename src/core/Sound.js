import {Howl,Howler} from "howler"

export default class Sound {

    static play(source, volume = 1.0) {

        let s = new Howl({
            src: source,
            volume: volume
        })

        s.play()

    }

    static playMusic(source, volume = 0.5) {
        let s = new Howl({
            src: source, volume, loop: true
        })

        s.play()

        return s
    }

    static playAtPosition(source, x = 0, y = 0) {
        let s = new Howl({
            src: source
        })

        s.pos(x,y,-1)
        s.play()
    }

}