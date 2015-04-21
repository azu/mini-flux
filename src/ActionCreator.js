// LICENSE : MIT
"use strict";
import dispatcher from "./dispatcher"
export default class ActionCreator {
    // "Emit" event ----> Store
    static countUp(data) {
        dispatcher.emit("countUp", data);
    }
}