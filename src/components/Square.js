import React from "react";

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgGreen: true,
        };
        this.handleClick = this.handleClick.bind(this);
    };



    handleClick() {
        this.setState({ bgGreen: !this.state.bgGreen });
    }

    render() {
        let {colour} = this.props;
        let colourState = this.state.bgGreen ? "green" :  colour;

        return (
            <div onClick={ this.handleClick } style={{ 
                backgroundColor: colourState, 
                height: "200px", 
                width: "200px", 
            }}></div>
        )
    }
};

Square.defaultProps = {
    colour: "blue",
};
    
export default Square;




/* class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: 
        };
        this.handleClick = this.handleClick.bind(this);
    };



    handleClick() {
        let {colour} = this.props; 
        
        this.setState({ bgColor: colour });
    }

    render() {

        return (
            <div onClick={ this.handleClick } style={{ 
                backgroundColor: this.state.bgColor, 
                height: "200px", 
                width: "200px", 
            }}></div>
        )
    }
}; */



    

    
/* const Square = ({ colour }) => (
    <div style={{ backgroundColor: colour, 
        height: "200px", 
        width: "200px", 
    }}></div>
    );
    
    
    Square.defaultProps = {
        colour: "blue",
    };
 */