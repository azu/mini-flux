// LICENSE : MIT
"use strict";
import assert from "power-assert"
import ActionCreator from "../src/ActionCreator"
import EventEmitter from "../src/EventEmitter"
describe("ActionCreator", function () {
    var dispatcher;
    var action;
    beforeEach(function () {
        dispatcher = new EventEmitter();
        action = new ActionCreator(dispatcher);
    });
    describe("countUp", function () {
        it("should emit `countUp` event", function (done) {
            var expectedCount = 42;
            dispatcher.on("countUp", function (count) {
                assert.equal(count, expectedCount);
                done();
            });
            action.countUp(expectedCount);
        });
    });
});