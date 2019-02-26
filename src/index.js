import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./style/index.css";
import { createStore } from "redux";
import { reduce } from "./reducer/index";

const e = document.getElementById("root");
if (!e) {
    let root = document.createElement('div');
    root.id = "root";
    document.body.appendChild( root );
}

let store = createStore(reduce);

ReactDOM.render(
    <App store={store}/>,
    document.getElementById("root")
)