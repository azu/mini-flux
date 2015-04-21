// LICENSE : MIT
"use strict";
import assert from "power-assert"
import Store from "../src/Store"
import EventEmitter from "../src/EventEmitter"
describe("Store", function () {
    var instance;
    var dispatcher;
    beforeEach(function () {
        dispatcher = new EventEmitter();
        instance = new Store(dispatcher);
    });
    describe("onCountUp", function () {
        it("should emit `CHANGE` event", function (done) {
            var expectedCount = 42;
            instance.on("CHANGE", done);
            dispatcher.emit("countUp", expectedCount);
        });
    });
});