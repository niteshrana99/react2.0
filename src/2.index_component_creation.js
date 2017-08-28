// Creating a component
//****************************//
//ES5 style

import React from 'react';
import ReactDOM from 'react-dom';

//let HelloWorld = React.createClass({ //this is component meta object
//    render(){
//        return (
//            <h1>Hello World</h1>
//        )
//    }
//});
//
//ReactDOM.render(<HelloWorld></HelloWorld>, document.getElementById('root')); // We can see in warning that React.createClass is deprecated. 

//*********************************//

// Using functions to create components. We can use JS client functions. Function name must be capitalised. 

//function HelloWorld(){
//    return (
//        <h1>Hello World</h1>
//    )
//}; // We use arrow in place of this fxn below.

//let HelloWorld = () => (<h1>Hello World</h1>); 
//
//ReactDOM.render(<HelloWorld></HelloWorld>, document.getElementById('root'));

//**********************************************//

//ES6 style. We will use classes

class HelloWorld extends React.Component {
    render(){
        return (
            <h1>Hello World</h1>
        )
    }
}


ReactDOM.render(<HelloWorld></HelloWorld>, document.getElementById('root'));


