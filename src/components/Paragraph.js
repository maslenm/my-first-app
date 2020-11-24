import React from "react";

class Paragraph extends React.Component {
    render() {
        let { children } = this.props;

        return (
            <p>{ children ? children : "Hello, world." }</p>
        );
    };   
};

export default Paragraph;


/* const Paragraph = ({ children }) => (
    <p>
        { 
            children ? children : "Hello, world."
        }
    </p>
); */
