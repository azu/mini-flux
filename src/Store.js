// LICENSE : MIT
"use strict";
import dispatcher from "./dispatcher"
import Emitter from "./EventEmitter"
class Store extends Emitter {
    constructor() {
        super();
        this.count = 0;
        // <--- observe event.
        dispatcher.on("countUp", this.onCountUp.bind(this));
    }

    getCount() {
        return this.count;
    }

    onCountUp(count) {
        if (this.count === count) {
            return;
        }
        this.count = count;
        // emit "CHANGE" ---> self
        this.emit("CHANGE");
    }
}
// export as a singleton
export default new Store();