import React, { Component } from "react";
import ToDoList from "./ToDoList";
import LivePreview from "./LivePreview";

class App extends Component {
    render() {
        return (
            <div>
                <ToDoList store={this.props.store}/>
                <LivePreview store={this.props.store}/>
            </div>
        )
    }
}

export default App;