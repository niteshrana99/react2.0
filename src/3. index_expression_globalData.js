// What a component can have? 
// UI element and Data


import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Nitesh';

class Message extends React.Component {
    render(){
        return(
            <h1>Hello {name}</h1>
        )
    }
}

let id = document.getElementById('root');
ReactDOM.render(<Message/>,id); 

// Data can be passed through three ways
//1. global vars done above
//2. props
//3. states