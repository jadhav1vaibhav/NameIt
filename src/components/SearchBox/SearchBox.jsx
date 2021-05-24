import React from 'react';
import './SearchBox.css';
const SearchBox = ({onInputChange}) =>{
    return(
        <div className="search-container">
            <input onChange={(event)=>{
                onInputChange(event.target.value) //passing value to function in parent component 
                //console.log(event.target.value)
            }} 
            type="text" 
            placeholder="Type Keywords" className="search-input" 
            />
        </div>
        // parent to child communication props 
        // child to parent communication callback method 

    );
};

export default SearchBox;