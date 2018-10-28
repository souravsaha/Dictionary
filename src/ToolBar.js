import React, { Component } from 'react';

const toolBarStyle = {
    position: 'relative',
    float: 'left',
    display: 'flex',
    padding: '8px 200px',
    background: '#6b9cea',
    height: '20%',
    justifyContent: 'center',
    // width: '100%'
};

const ulStyle = {
    position: 'absolute',
    left: '22%',
    listStyleType:'none',
    top:'50px',
    zIndex:'1',
    border: '1px solid black',
    width:'45%',
}

const inputBoxStyle = {
    width: '60%',
    fontSize: '16px',
    height: '30px',
    marginRight: '10px',
};

const buttonStyle = {
    width: '10%',
    position: 'right',
    marginLeft: '10px',    
    height: '35.8px'
};


class ToolBar extends Component {

    render() {
        return (
            <div style={toolBarStyle}>
                <input type="text" onChange={this.props.onChange} style={inputBoxStyle} />
                <button type="button" onClick={this.props.onClick} style={buttonStyle}> Search </button>
                <ul style={ulStyle}> 
                    <li>
                        he
                    </li>
                    <li>
                        hel
                    </li>
                    <li>
                        hell
                    </li>
                    <li>
                        hello
                    </li>
                    <li>
                        hellllo
                    </li>
                </ul>
            </div>
        );
    }
}

export { ToolBar };