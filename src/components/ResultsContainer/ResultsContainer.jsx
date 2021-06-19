import React from "react";
import './ResultsContainer.css';
import NameCard from "../NameCard/NameCard";

const ResultsContainer = ({ suggestedNames }) => {

    const suggestedNamejsx = suggestedNames.map((suggestedName) => {
        // return <p key={suggestedName}>
        //     {suggestedName}
        // </p>

        return <NameCard key={suggestedName} suggestedName={suggestedName} />
    });

    return (
        <div className='resut-container'>
            {/* {suggestedNames.length > 0
                        ? suggestedNames[0]
                        : null} */}
            {/* {suggestedNames.length > 0 && suggestedNames[0]} */}
            {suggestedNamejsx}
        </div>
    )
}

export default ResultsContainer;