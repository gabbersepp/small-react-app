import React, { Component } from "react";
import ToDoList from "./ToDoList";
import LivePreview from "./LivePreview";
import HomePage from "./HomePage";
import { Route, Redirect } from "react-router";
import { HashRouter, Link } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <nav>
                        <Link to="/todos">ToDos</Link>
                        <Link to="/">Home</Link>
                    </nav>
                    
                    <Route path="/todos" exact={true} render={() => (
                        <div>
                        <ToDoList/>
                        <LivePreview/>
                        </div>
                    )}/>
                    <Route path="/home" exact={true} component={HomePage}/>
                    <Route path="/" exact={true} render={() => (
                        <Redirect to="/home"/>
                    )}/>
                    
                </div>
            </HashRouter>
        )
    }
}

export default App;