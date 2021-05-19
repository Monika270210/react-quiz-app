import React from 'react'
import './Question.css';

 const Questions = (props) => {
    return (
        <div>
            <h1>{props.question}</h1>
        </div>
    )
}

export default Questions