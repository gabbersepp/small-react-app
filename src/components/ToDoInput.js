import React, { Component } from "react";
import { setPreview } from "./LivePreview";

export default class ToDoInput extends Component {
    constructor(props) {
        super(props);
        this.value = "";
    }

    render() {
        return (
            <div class="todo-input">
                <input type="text" onChange={(e) => this.onChange(e.target.value)}/>
                <button onClick={() => this.props.input(this.value)}>Add</button>
            </div>
        )
    }

    onChange(val) {
        this.value = val;
        setPreview(val);
    }
}