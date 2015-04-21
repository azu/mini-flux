// LICENSE : MIT
"use strict";
import dispatcher from "./dispatcher"
export default class ActionCreator {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
    }

    // "Emit" event ----> Store
    countUp(data) {
        this.dispatcher.emit("countUp", data);
    }
}