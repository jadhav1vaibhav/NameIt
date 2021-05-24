import React from 'react';
import './ResultsContainer.css';
import NameCard from "../NameCard/NameCard";
 
const ResultsContainer = ({suggestedNames}) =>{
    const suggestedNameJsx=suggestedNames.map((suggestedName)=>{
        return <NameCard key={suggestedName} suggestedName={suggestedName}/>;
    });
    return(
        <div className="results-container">
            {/* <p>{suggestedNames.length>0 ? suggestedNames[0] : null }</p> */}
            {suggestedNameJsx}
        </div>
    );
};

export default ResultsContainer;