import React, { Component } from "react";
import { connect } from "react-redux";

class LivePreview extends Component {
    render() {
        return (
            <div id="preview" style={{textAlign: "center"}}>
                <div dangerouslySetInnerHTML={{__html: this.props.text}}></div>
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return {
        text: state.preview
    }
}

const mapDispatchToProps = {    
}

export default connect(mapStateToProps, mapDispatchToProps)(LivePreview);