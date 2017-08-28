import React from 'react';
import ReactDOM from 'react-dom';

//Conditional rendering

function UserGreeting() {
    return (
        <h1>Welcome Back</h1>
    )
};


function guestGreeting() {
    return (
        <h1>Please Login</h1>
    )
};

function Greeting(props) {
    let isLoggedIn = props.islogged;
    
    if(isLoggedIn) {
        return <UserGreeting />
    } else {
        return <guestGreeting />
    }
}; 
        
ReactDOM.render(<Greeting islogged={true} />,document.getElementById('root'));        
        