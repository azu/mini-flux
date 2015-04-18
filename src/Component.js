// LICENSE : MIT
"use strict";
import React from "react"
import ActionCreator from "./ActionCreator"
import {instance} from "./Store"
export default class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: instance.getLastClick()};
        // <- Observe store's change
        instance.on("CHANGE", () => {
            console.log(instance.getLastClick());
            this.setState({count: instance.getLastClick()})
        });
    }

    tick() {
        ActionCreator.clickAction(this.state.count + 1);
    }

    render() {
        return (
            <div onClick={this.tick.bind(this)}>
                Clicks: {this.state.count}
            </div>
        );
    }
}