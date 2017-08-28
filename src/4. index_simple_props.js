import React from 'react';
import ReactDOM from 'react-dom';

//passing data by props

// Using Functions
//props in function is object which holds all the props we pass. So props is a way of passing data to the component.
//function MessageBox(props) {
//    console.log(props);
//    return (
//        <h1>Hello {props.whom}</h1>
//    )
//};
//
//const id = document.getElementById('root');
//
//ReactDOM.render(<MessageBox whom='Nitesh' />,id)

// We can do same with Classes

//class AnotherMessage extends React.Component {
//    render(){
//        return(
//            <h2>Hello {this.props.lname}<h2>
//        )
//    }
//};
//
//const id = document.getElementById('root');
//ReactDOM.render(<AnotherMessage lname='Rana' />,id)

class Message extends React.Component {
    render(){
        console.log(this);
        return(
            <h1>Hello {this.props.name}</h1>
        )
    }
}

let id = document.getElementById('root');
ReactDOM.render(<Message name='Nitesh'/>,id);