import React from 'react';
import ReactDOM from 'react-dom';

// State is private and is fully controlled by component.

class Clock extends React.Component {
    
    constructor(props) {
        super(props);
        console.log(this)
        this.state = { //the only place we can assign this.state is constructor.
            date:new Date()
        }
    }
    
    componentDidMount() {
        // This hook runs after component output is rendered to th DOM. So this is a good place to set timer.
        this.timerId = setInterval(
            () => this.tick(),
        1000)
    }
    
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    
    tick() {
        this.setState({
            date : new Date()
        })
    }
    
    render() {
        return(
            <div>
            <h1>Hello</h1>
            <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

ReactDOM.render(<Clock/>, document.getElementById('root'));

// We want to set up a timer when the clock is rendered to the dom for first time. This is called mounting in react. We also want to remove the clock when the DOM produced by timer is removed. This is called unmounting. We can declare special methods on component class when component mounts ans unmounts. So we declare two methods. These methods are called lifecycle hooks. 
// Since this.state and this.props may be updated asynchronously, we cannot rely on these two for the next state. To fix this we use second form of setState that accepsts a function rather than object. This function recieves previous state as first argument and the props at the time the update is applied as second argument. 
// this.setState((prevState, props)=>({
//    counter: prevState+ props
//}))