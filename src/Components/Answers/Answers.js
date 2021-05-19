import React from 'react'
import './Answer.css';

const Answers = (props) => {
    let array = Object.keys(props.answer).map((ans) => (
        <li
            className=
            {
                props.correctAnswer === ans ?
                    'correct' :
                    props.clickedAnswer === ans ?
                        'incorrect' : ''
            }
            key={ans}
            onClick={() => props.checkAnswer(ans)} >{props.answer[ans]}
        </li>
    ))
    return (
        <>
            <ul disabled={props.clickedAnswer ? true : false} className="Answers">
                {console.log(props.clickedAnswer)}
                {array}
            </ul>
            <div className="Response" >
                {
                    props.correctAnswer ? 'Correct Answer!' :
                        props.clickedAnswer ? 'Incorrect Answer!' : ''
                }
            </div>
        </>
    )
}
export default Answers