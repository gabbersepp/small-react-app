import React, { Component } from "react";

export default class ToDoInput extends Component {
    constructor(props) {
        super(props);
        this.value = "";
    }

    render() {
        return (
            <div class="todo-input">
                <input type="text" onChange={(e) => this.value = e.target.value}/>
                <button onClick={() => this.props.input(this.value)}>Add</button>
            </div>
        )
    }
}