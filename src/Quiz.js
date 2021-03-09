import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



export default function Quiz() {
    const { id } = useParams();
    //console.log(id);


    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [startQuiz, setStartQuiz] = useState(true);
    const [isCorrect,setIscorrect] = useState(false);
    
    const url = "https://credifybe.tk/getquestions";

    //console.log(id);
    const [questions, setQuestions] = useState([]);
    const [singleanswer,setsingleanswer]=useState('');


    useEffect(() => {
        axios.post(url, {
            "quizid": id
        })
            .then(function (response) {
                console.log(response.status);
                console.log((response.data))
                setQuestions(response.data)
            })
            .catch(function (err) {
                console.log("error message", err.message);
            })
    }, [startQuiz]

    )



    
    const handleAnswerOptionClick = (value) => {
    
            setIscorrect(value);
    }


     const handlenext = () => {

         if (questions[currentQuestion].question_type == 'single' )
        {
          if(questions[currentQuestion].choices===singleanswer){
              setScore(score + 1)
              console.log('true works')
          }
        }
         if (questions[currentQuestion].question_type === 'multiple')
        {
            console.log(isCorrect);

             if (isCorrect) {
                 setScore(score + 1);
             }
        }

         const nextQuestion = currentQuestion + 1;

         if (nextQuestion < questions.length) {
             setCurrentQuestion(nextQuestion);
         }
         else {
             setShowScore(true);
         }
     }  
     
     
   return (
        <div className='app'>
            {
                startQuiz ? (<div className='instruction-section'>
                    <h2>Instructions to be fetched</h2>
                    <p className="instructions">                      
                        1. dont answer any questions &nbsp;
                        2. make sure to close your eyes
                    </p>
                    <button onClick={() => setStartQuiz(false)}>begin test</button>
                </div>):
            (showScore ? (
                <div className='score-section'>
                    You scored {score} out of {questions.length}
                </div>
            ) : (

                    ( questions.length <=0) ? (
                        <div className="loading">loading questions...
                        {questions.length}</div>
                    ) : (

                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].text}</div>
                        </div>
                        <div className='answer-section'>
                        {(questions[currentQuestion].question_type === 'single') ? (
                            <input type="text" 
                            required
                            onChange = {(e)=> setsingleanswer(e.target.value)}
                            value={singleanswer}
                            />

                        ) : ( 
                                questions[currentQuestion].choices.map((option,index) => (
                                 <button class = {`option option-${index}`}
                                        onClick={handleAnswerOptionClick(questions[currentQuestion].choices[index].is_correct)}
                                 >{option.text}</button>
                            ))
                            ) 

                               }  
                             <div>
                                <button 
                                onClick={() => handlenext()}
                                >{(currentQuestion+1==questions.length) ? "finish" : "next"}</button>
                            </div>  
                            
                        </div>
                    </>)
                ))}
        </div>
    );
}