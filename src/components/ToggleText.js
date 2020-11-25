/* Create <ToggleText initial="Hello" alternate="World"> component. It should consist of a <p> and a <button>Toggle</button>. When the <button> is clicked the text of the <p> tag should alternate between initial and alternate. */

import React from "react";

class ToggleText extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: true,
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        this.setState({ text: !this.state.text });
    }

    render() {
        let clicked = this.state.text ? "Hello" : "World";

        return (
            <section>
                <button onClick={ this.handleClick }>Toggle</button><p>{ clicked }</p>
            </section>
        );
    }
}

export default ToggleText;
