// LICENSE : MIT
"use strict";
import dispatcher from "./dispatcher"
import Emitter from "./EventEmitter"
export default class Store extends Emitter {
    constructor() {
        super();
        this.lastClick = null;
        // <- observe dispatcher event.
        dispatcher.on("click", this.onHandleClick.bind(this));
    }

    getLastClick() {
        return this.lastClick;
    }

    onHandleClick(data) {
        this.lastClick = data;
        // -> emit Change
        this.emit("CHANGE");
    }
}
Store.instance = new Store();