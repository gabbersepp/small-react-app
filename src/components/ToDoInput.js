import React, { Component } from "react";
import { setPreview } from "./../action/index";
import { connect } from "react-redux";

class ToDoInput extends Component {
    constructor(props) {
        super(props);
        this.value = "";
    }

    render() {
        return (
            <div className="todo-input">
                <input type="text" onChange={(e) => this.onChange(e.target.value)}/>
                <button onClick={() => this.props.input(this.value)}>Add</button>
            </div>
        )
    }

    onChange(val) {
        this.value = val;
        this.props.setPreviewData(val);
    }
}

const mapStateToProps = function(state) {
    return {}
}

const mapDispatchToProps = {
    setPreviewData: setPreview
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoInput);