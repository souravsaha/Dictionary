import React, { Component } from 'react';
import { ToolBar } from './ToolBar';
import { WordMeaning } from './WordMeaning';
import { createStore } from 'redux';

const dictStyle = {
    display: 'flex',
    flexDirection: 'column'
}

class Dictionary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.wordSearch = '';
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.wordSearch = e.target.value;
    }

    handleClick() {
        console.log("clicked");
        console.log(this.state.input);
        this.setState( {
            input : this.wordSearch
        })
    }

    render() {
        return (
            <div style={dictStyle}>
                <ToolBar {...this.props} onChange={this.handleChange} onClick={this.handleClick} />
                <WordMeaning {...this.props} input={this.state.input} />
            </div>
        );
    }
}

export { Dictionary };
