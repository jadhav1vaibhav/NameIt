import React from 'react';
import './SearchBox.css';
const SearchBox = () =>{
    return(
        <div className="search-container">
            <input type="text" placeholder="Type Keywords" className="search-input" />
        </div>
    );
};

export default SearchBox;