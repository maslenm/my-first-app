const Square = ({ colour }) => (
    <div style={{ backgroundColor: colour, height: "200px", width: "200px" }}></div>
    );
    
    
    Square.defaultProps = {
        colour: "blue",
    };
    
    export default Square;
    