// LICENSE : MIT
"use strict";
import assert from "power-assert"
import ActionCreator from "../src/ActionCreator"
import dispatcher from "../src/dispatcher"
describe("ActionCreator", function () {
    describe("countUp", function () {
        it("should emit `countUp` event", function (done) {
            var expectedCount = 42;
            dispatcher.on("countUp", function (count) {
                assert.equal(count, expectedCount);
                done();
            });
            ActionCreator.countUp(expectedCount);
        });
    });
});