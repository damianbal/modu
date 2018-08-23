
export default class Timer {

    /**
     * Create timer
     * 
     * @param {float} interval 
     * @param {callback} callback 
     * @param {boolean} once 
     */
    constructor(interval, callback = () => {}, once = false) {
        this.timer = setInterval(callback, interval * 1000.0);
    }

    /**
     * Remove timer
     */
    destroy() {
        clearInterval(this.timer);
    }

}