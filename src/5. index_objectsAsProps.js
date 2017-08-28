//Props can be simple type ex. primitive or props can be arrays, objects, functions

import React from 'react';
import ReactDOM from 'react-dom';

//Data as object

const user = {
    name:'Nitesh',
    from:'Pune'
};

function MessageBox(props) {
    console.log(props);
    return(
        <h1>Hello {props.userInfo.name} from {props.userInfo.from}</h1>
    )    
}

const id = document.getElementById('root');

ReactDOM.render(<MessageBox userInfo = {user} />,id)