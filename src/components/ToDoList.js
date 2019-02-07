import React, { Component } from "react";
import ToDoInput from "./ToDoInput";

import "./../style/todo.css";

export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.todos = [{ title: "Todo 1" }, { title: "Todo 2"}];
        this.input = this.input.bind(this);
    }

    input(value) {
        this.todos.push({title: value});
    }

    render() {
        return (
            <div id="todo-list">
                <ToDoInput input={this.input}/>
                {this.todos.map(todo => (<div className="todo-entry">{todo.title}</div>))}
            </div>
        )
    }
}