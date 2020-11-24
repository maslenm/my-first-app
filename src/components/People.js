//let namesList = { names } //["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = ({ names }) => (
    names ? (
        <ul> 
            { names.map((name, index) => (
                <li key={ index }>{ name }</li>)) }
        </ul>
    ) : <p>Nothing to see here</p>
);

export default People;