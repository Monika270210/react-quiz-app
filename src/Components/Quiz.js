import React, { Component } from 'react'
import Answers from './Answers/Answers'
import Questions from './Questions/Questions'
import './QuizMain.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import ProgressBar from 'react-bootstrap/ProgressBar'



class Quiz extends Component {
    state = {
        questions: {
            1: 'How is COVID-19 passed on?"?',
            2: 'What are the common symptoms of COVID-19?',
            3: 'Can you always tell if someone has COVID-19? ',
            4: 'Can washing your hands protect you from COVID-19? ',
            5: 'When should fabric face masks be worn?'
        },
        answers: {
            1: {
                1: 'Through droplets that come from your mouth and nose when you cough or breathe out',
                2: 'In sexual fluids, including semen, vaginal fluids or anal mucous',
                3: 'By drinking unclean water',
                4: 'All of the above'

            },
            2: {
                1: 'A new and continuous cough',
                2: 'Fever',
                3: 'Tiredness',
                4: 'All of the above'
            },
            3: {
                1: 'No – not everyone with COVID-19 has symptoms',
                2: 'Yes – it will be obvious, a person with COVID-19 coughs a lot',
                3: 'Yes – you can tell just by where a person comes from, their race and ethnicity',
                4: 'None of the above'
            },
            4: {
                1: 'Yes – but only if you use a strong bleach',
                2: 'Yes – normal soap and water or hand sanitizer is enough',
                3: 'No – Washing your hands doesn’t stop COVID-19',
                4: 'None of the above'
            },
            5: {
                1: 'On public transport',
                2: 'In confined or crowded spaces',
                3: 'In small shops',
                4: 'All of the above'
            }
        },
        correctAnswers: {
            1: '1',
            2: '4',
            3: '1',
            4: '2',
            5: '4'
        },
        clickedAns: {
            1: '0',
            2: '0',
            3: '0',
            4: '0',
            5: '0'
        },
        correctAnswer: 0,
        score: 0,
        step: 1,
        clickedAnswer: 0,
        view: false
    }


    checkAnswer = (ans) => {
        let { correctAnswers, step, score, clickedAnswer, correctAnswer, clickedAns } = this.state
        console.log(correctAnswers[step])
        clickedAns[step] = ans
        console.log(clickedAns[step])
        if (ans === correctAnswers[step]) {
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],

            })
        }
        else {
            this.setState({
                correctAnswer: 0
            })
        }
        this.setState({
            clickedAnswer: ans,
            // clickedAns[step]: ans
        })

    }
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            clickedAnswer: 0,
            correctAnswer: 0
        })
    }
    viewResult = () => {
        this.setState({
            view: true
        })
        console.log(this.state.clickedAns[1])
        console.log(this.state.clickedAns[2])
        console.log(this.state.clickedAns[3])
    }
    render() {
        // let now = (step/Object.keys(questions).length)*100;
        let now = 0
        let { step, questions, answers, correctAnswer, clickedAnswer, score, clickedAns, view } = this.state
        return (
            <div className="Content">

                { step <= Object.keys(questions).length ?
                    <>  <ProgressBar variant="warning" className="progressBar" now={(step / Object.keys(questions).length) * 100} label={`${now}%`} srOnly />
                        <Questions
                            question={questions[step]}
                        />
                        <Answers
                            answer={answers[step]}
                            checkAnswer={this.checkAnswer}  // another way check on google 
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                            className="NextStep"
                            disabled={
                                clickedAnswer && Object.keys(questions).length >= step ? false : true
                            }
                            onClick={() => this.nextStep(step)}
                        >
                            Next
               </button>
                    </> :
                    <div className="finalPage">
                        <h1>Congratulations!</h1> <h3>You have Successfully Completed the Quiz</h3>
                        <p>You Scored   {score} / {Object.keys(questions).length}</p>
                        <>
                            <Button disabled={view ? true : false} className="resultButton" variant="success" size="lg" onClick={this.viewResult} active >View Result</Button>
                            {
                                view ?
                                    <div>
                                        {

                                            Object.keys(clickedAns).map((ans) => (
                                                <div>
                                                    {/* // clickedAns[ans]===this.state.correctAnswers[ans]? 'Correct Ans': 'Incorrect Ans' */}
                                                    <Table striped bordered hover className="responseTable">
                                                        <thead>
                                                            <tr className="thead">
                                                                <th>#</th>
                                                                <th>Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="tbody">
                                                            {clickedAns[ans] === this.state.correctAnswers[ans] ?
                                                                <tr>
                                                                    <td>{ans}</td>
                                                                    <td className="correct">Correct Answer !</td>
                                                                </tr> :
                                                                <tr>
                                                                    <td>{ans}</td>
                                                                    <td className="incorrect">Incorrect Answer!</td>
                                                                </tr>
                                                            }
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    : null
                            }
                        </>
                    </div>
                }
            </div>
        )
    }
}

export default Quiz
