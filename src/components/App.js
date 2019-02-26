import React, { Component } from "react";
import ToDoList from "./ToDoList";
import LivePreview from "./LivePreview";

class App extends Component {
    render() {
        return (
            <div>
                <ToDoList/>
                <LivePreview/>
            </div>
        )
    }
}

export default App;