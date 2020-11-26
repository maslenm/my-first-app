/* Create a <PasswordStrength> component. It should contain an <input> with the type password. The background styling should change depending on the length of the password:

If it's empty the background shouldn't have styling.
If it's less than 9 it should be red.
If it's less than 16 it should be orange.
If it's 16 or more then it should be green. */

import React from "react";

class PasswordStrength extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }
    
    colourIf() {
        let inputLength = this.state.input.length;

        if (inputLength > 0 && inputLength < 9) {
            return "red";
        }
        if (inputLength >= 9 && inputLength < 16) {
            return "orange";
        }
        if (inputLength >= 16) {
            return "green";
        }
    }

    render() {
         
        let colourState = this.colourIf();

        return (
            <div className="form-group">
                <label>{ this.props.label }</label>
                
                <p className="form-text text-muted">
                    Password:

                <input type="password"
                    onChange={ this.handleChange }
                    defaultValue={ this.state.input }
                    name={ this.props.name }
                    className="form-control"
                    style={{ backgroundColor: colourState }}
                />
                </p>
            </div>
        );
    }
}

export default PasswordStrength;