import React from 'react';

function Title({title, span}) {
    return (
        <div className="Title">
            <h1>
                {title}
                <span>{span}</span>
                
            </h1>
            
        </div>
    )
}

export default Title
