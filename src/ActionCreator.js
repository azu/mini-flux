// LICENSE : MIT
"use strict";
export default class ActionCreator {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
    }

    // "Emit" event ----> Store
    countUp(data) {
        this.dispatcher.emit("countUp", data);
    }
}