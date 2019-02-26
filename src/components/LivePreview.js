import React, { Component } from "react";

class LivePreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text || ""
        }

        this.props.store.subscribe(() => {
            this.setState({
                text: this.props.store.getState().preview
            })
        });
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