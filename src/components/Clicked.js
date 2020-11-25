import React from "react";

class Clicked extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicker: "Not clicked",
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState( {clicker: "Clicked!" } );
    }

    render() {
        return (
            <p onClick={ this.handleClick }>{ this.state.clicker }</p>
        )
    }
};


export default Clicked;




/* class Clicked extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let current = this.state.counter;

        this.setState({ counter: current + 1});
    }

    render() {
        return (
            <p onClick={ this.handleClick }>{ this.state.counter }</p>
        )
    }
}; */
