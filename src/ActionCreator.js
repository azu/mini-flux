// LICENSE : MIT
"use strict";
import dispatcher from "./dispatcher"
export default class Actions {
    // -> Emit event -> Store
    static clickAction(data) {
        dispatcher.emit("click", data);
    }
}