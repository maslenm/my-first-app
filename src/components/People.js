//let namesList = { names } //["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = ({ names }) => (
    <ul>
        { names ? names.map((name, index) => (
        <li key={ index }>
            { name }
        </li> )) : "Nothing to see here" }
    </ul>
);

export default People;