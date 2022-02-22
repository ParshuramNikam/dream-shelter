import { useState } from "react"
import { checkboxQuestions, inputQuestions } from "../../utils/Questions";
import CheckboxQuestions from "./CheckboxQuestions";
import InputQuestion from "./InputQuestion";
import Intro from "./Intro"
import Outro from "./Outro";


const AllQuestion = () => {

    const [index, setIndex] = useState(1);
    const [lastQuestionIndex] = useState(7);

    const [answers, setAnswers] = useState([]);

    const nextBtnClickListner = () => {
        if(index!==lastQuestionIndex){
            setIndex(index+1);
        }else{
            alert("⚠ Set next btn unclikable! ⚠")
        }
    }
    
    const prevBtnClickListner = () => {
        if(index!==1){
            setIndex(index-1);
        }else{
            alert("⚠ Set prev btn unclikable! ⚠")
        }
    }

    const submitQuestions = () => {
        alert("Submited your answers!")
    }



    return (
        <div className="min-h-screen md:w-1/2 p-3">
            {
                index===1 ? <Intro nextBtnClickListner={nextBtnClickListner} prevBtnClickListner={prevBtnClickListner} /> : null
            }
            {
                index===2 ? <InputQuestion  question={inputQuestions[0]} nextBtnClickListner={nextBtnClickListner} prevBtnClickListner={prevBtnClickListner} /> : null
            }
            {
                index===3 ? <InputQuestion question={inputQuestions[1]} nextBtnClickListner={nextBtnClickListner} prevBtnClickListner={prevBtnClickListner} /> : null
            }
            {
                index===4 ? <InputQuestion question={inputQuestions[2]} nextBtnClickListner={nextBtnClickListner} prevBtnClickListner={prevBtnClickListner} /> : null
            }
            {
                index===5 ? <CheckboxQuestions  question={checkboxQuestions[0]} nextBtnClickListner={nextBtnClickListner} prevBtnClickListner={prevBtnClickListner} /> : null
            }
            {
                index===6 ? <CheckboxQuestions  question={checkboxQuestions[1]} nextBtnClickListner={nextBtnClickListner} prevBtnClickListner={prevBtnClickListner} /> : null
            }
            {
                index===7 ? <Outro submitQuestions={submitQuestions} nextBtnClickListner={nextBtnClickListner} prevBtnClickListner={prevBtnClickListner} /> : null
            }
        </div>
    )
}

export default AllQuestion