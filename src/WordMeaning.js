import React, { Component } from 'react';
import { wordList } from './dictionaryWordMeaning';
//import { Action } from './test';
import $ from 'jquery';
import { debug, error } from 'util';
const wordSearchStyle = {
    position: 'relative',
    padding: '8px 20px',
    height: '500px',
    fontSize: '20px',
    fonFamily: 'Arial',
    width: 'calc(100% - 42px)'
};

const divStyle = {
    paddingTop: '40px'
}

class WordMeaning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: ''
        };
    }
    componentWillReceiveProps(nextProps)
    {
        if(nextProps.input)
            this.doFetch(nextProps.input);
    }
    doFetch(searchWord)
    {
        var url = 'http://localhost:3002/'+searchWord.toLowerCase();
        fetch(url, {
            method: 'GET', 
        }).then(res => res.json())
        .then(response => { 
            console.log('Success:', response); 
            this.setState({ word : (response.word) ? response.word : `No such word found`});
        });
    }

  ajaxRequest()
    {
        const link = "http://localhost:3002/yes";
        const xmlHttp = new XMLHttpRequest(); // creates 'ajax' object
            xmlHttp.onreadystatechange = function() //monitors and waits for response from the server
            {
                debugger;
               if(xmlHttp.readyState === 2 && xmlHttp.status === 200) //checks if response was with status -> "OK"
               {
                   var re = JSON.parse(xmlHttp.responseText); //gets data and parses it, in this case we know that data type is JSON. 
                   console.log(re);
               }
    
            }
            xmlHttp.open("GET", link); //set method and address
            xmlHttp.send(); //send data
    
    }
    render() {         
        return (
                <div style={divStyle}>
                    <textarea type="text" value={this.state.word} style={wordSearchStyle} />
                </div>
        );
    }
}

export { WordMeaning };