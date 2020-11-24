import React from "react";

class Header extends React.Component {
    render() {
        let { children } = this.props;
        
        return (
            <h1>{ children }</h1>
        );
    };
};

export default Header;

/* const Header = ({ children }) => (
    <h1>{ children }</h1>
); */
  


