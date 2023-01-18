import React from "react";

const SearchBar = (props) => {
    return (
        <div>
            <label>Enter a word:
                <input type="text" onChange={props.handleChange} value={props.text} />
                <button onClick={props.handleClick}>find</button>
            </label>
        </div>
    );
}

export default SearchBar;