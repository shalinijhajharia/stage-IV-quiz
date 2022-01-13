import React from "react"
import { Link } from "react-router-dom"
import Question from "./source"


const Quiz = () => {
    const [value, setvalue] = React.useState(-1)
    const [score, setscore] = React.useState(0)
    const [result, setresult] = React.useState('');

    const [sno, setno] = React.useState(0)
    const quiz = Question()
    if (quiz) {
        const currentquestion = quiz[sno]
        const next = () => {
            setno(sno => sno !== quiz.length - 1 ? ++sno : sno)
            setscore(score => value === currentquestion.answer ? ++score : score)
            setvalue(-1)
        }
        const previous = () => {
            sno > 0 ? setno(no => --no) : setvalue(0)
            setscore(score => score !== 0 ? --score : 0)
        }
        const optionclick = (value) => {
            setvalue(value)
            setresult(value === currentquestion.answer ? "correct" : "wrong")
        }
        console.log(currentquestion.options);
        console.log("current ans is " + currentquestion.answer);


        return (
            <React.Fragment>
                <div className={`banner ${result}   `}>{result}</div>
                <h1>Question</h1>
                <span>{sno + 1} of {quiz.length}</span>
                <span>{currentquestion.question}</span>
                <div className="options">
                    {
                        currentquestion.options.map((ele, index) => <div key={index} id={index} onClick={() => optionclick(ele)} >{ele}</div>)
                    }
                </div>
                <div className="buttons">
                    <button onClick={previous} disabled={sno !== 0 ? false : true}   >Previous</button>
                    <button onClick={next} disabled={value !== -1 && sno !== quiz.length - 1 ? false : true} >Next</button>
                    {sno !== quiz.length - 1 ? <Link to="/" className=" button quit" >Quit</Link> : <Link to={`/results/${quiz.length}/${value === currentquestion.answer ? score + 1 : score}`} className="button submit" >Submit</Link>}
                </div>
            </React.Fragment>
        )
    }
    return null

}

export default Quiz