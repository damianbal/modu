
export default class Timer {

    constructor(interval, callback = () => {}, once = false) {
        this.timer = setInterval(callback, interval * 1000.0);
    }

    destroy() {
        clearInterval(this.timer);
    }

}