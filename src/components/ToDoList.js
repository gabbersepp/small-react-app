import React, { Component } from "react";
import ToDoInput from "./ToDoInput";

import "./../style/todo.css";

export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [{ title: "Todo 1" }, { title: "Todo 2"}]
        }
        this.input = this.input.bind(this);
    }

    input(value) {
        this.state.todos.push({title: value});
        this.setState(this.state); // very important! use setState() instead of direct assignment!
    }

    render() {
        return (
            <div id="todo-list">
                <ToDoInput input={this.input}/>
                {this.state.todos.map(todo => (<div className="todo-entry" dangerouslySetInnerHTML={{__html: todo.title}}></div>))}
            </div>
        )
    }
}