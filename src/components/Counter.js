/* Create a <Counter initial={ 50 } max={ 100 } /> component. It should consist of a <p> containing a number (which starts at the initial value) and two buttons, + and -. When the user clicks the + button, the number should go up. When the user clicks the - button the number should go down. The number should not be able to go below 0. Use props to pass in a maximum value for the counter. */

import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: this.props.initial,
        };
        this.increaseClick = this.increaseClick.bind(this);
        this.decreaseClick = this.decreaseClick.bind(this);
    }

    increaseClick() {
        if (this.state.counter < this.props.max) {
        this.setState({ counter: this.state.counter + 1 });
        }
    }

    decreaseClick() {
        if (this.state.counter > 0){
        this.setState({ counter: this.state.counter - 1 });
        }
    }

    render() {
        return (
            <section>
                <button onClick={ this.increaseClick }>+</button><p>{ this.state.counter }</p><button onClick={ this.decreaseClick }>-</button>
            </section>
        )
    }
}



Counter.defaultProps = {
    initial: 50
};

export default Counter;