import React, { Component } from "react";

let instance = null;

export function setPreview(text) {
    instance.setState({
        text: text
    });
}

class LivePreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text || ""
        }
        instance = this;
    }

    render() {
        return (
            <div id="preview" style={{textAlign: "center"}}>
                <div dangerouslySetInnerHTML={{__html: this.state.text}}></div>
            </div>
        )
    }
}

export default LivePreview;