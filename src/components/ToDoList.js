import React, { Component } from "react";
import "./../style/todo.css";

export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.todos = [{ title: "Todo 1" }, { title: "Todo 2"}];
    }

    render() {
        return (
            <div id="todo-list">
                {this.todos.map(todo => (<div className="todo-entry">{todo.title}</div>))}
            </div>
        )
    }
}