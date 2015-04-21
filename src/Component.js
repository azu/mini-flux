// LICENSE : MIT
"use strict";
import React from "react"
import ActionCreator from "./ActionCreator"
import Store from "./Store"
export default class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: Store.getCount()};
        // <- Observe store's change
        Store.on("CHANGE", () => {
            this.setState({count: Store.getCount()})
        });
    }

    tick() {
        ActionCreator.countUp(this.state.count + 1);
    }

    render() {
        return (
            <div>
                <button onClick={this.tick.bind(this)}>Count Up</button>

                <p>
                    Count: {this.state.count}
                </p>
            </div>
        );
    }
}