import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { db } from "../../database/firebase.config";
import { UserFnameContext } from "../../pages/QuestionsPage";
import { checkboxQuestions, inputQuestions } from "../../utils/Questions";
import { notifySuccess, notifyWarning } from "../../utils/reactToast";
import InputQuestion from "./InputQuestion";
import Intro from "./Intro";
import NextPrevBtns from "./NextPrevBtns";
import Outro from "./Outro";
import SlidingAnimation from "./SlidingAnimation";

const AllQuestion = () => {
  const [index, setIndex] = useState(1);
  const [lastQuestionIndex] = useState(7); // no of questions = lastQuestionIndex - 2;  => becuase 1 is intro and 1 is outro

  const [fname, setfnme] = useState("");

  const [inputAnswers, setInputAnswers] = useState(["", "", ""]);
  const [isAnswered, setIsAnswered] = useState([]);

  const [cb1, setCb1] = useState([]);
  const [cb2, setCb2] = useState([]);

  const history = useHistory();

  useEffect(() => {
    for (let i = 0; i < lastQuestionIndex; i++) {
      setIsAnswered([...isAnswered, false]);
    }
  }, []);

  const nextBtnClickListner = () => {
    if (index === 2 && fname==="") {
      console.log("Please enter your first name");
      notifyWarning("Please enter your first name >"+ fname+"<")
      return;
    }
    else if (index === 2 && inputAnswers[1]==="") {
      console.log("index 2 is here...");
      notifyWarning("Please enter your first name")
      return;
    }
    else if (index === 3) {
      console.log("index 3 is here...");
    }

    if (index !== lastQuestionIndex) {
      setIndex(index + 1);
    } else {
      alert("⚠ Set next btn unclikable! ⚠");
    }
  };

  const prevBtnClickListner = () => {
    if (index === 1) {
      console.log("index 1 is here...");
    }
    else if (index === 2) {
      console.log("index 2 is here...");
    }
    else if (index === 3) {
      console.log("index 3 is here...");
    }

    if (index !== 1) {
      setIndex(index - 1);
    } else {
      alert("⚠ Set prev btn sunclikable! ⚠");
    }
  };

  const submitQuestions = () => {
    if (
      inputAnswers[1] === "" ||
      inputAnswers[2] === "" ||
      cb1[0] === "" ||
      cb2[0] === "" ||
      fname === ""
    ) {
      notifyWarning("All questions required");
      return;
    }
    try {
      db.collection("Users")
        .doc(localStorage.getItem("ds-user-uid"))
        .update(
          {
            interest: Array.from(new Set(cb1)),
            activityWantsToDo: Array.from(new Set(cb2)),
            fname: fname,
            lname: inputAnswers[1],
            location: inputAnswers[2],
            followed: 0,
            followers: 0,
            blogs: 0,
            questionsAsked: 0,
            collegeName: "",
            bannerURL: "",
            jobtitle: "",
          },
          { merge: true }
        );
      notifySuccess("Submited your answers!");
      history.push('/');
    } catch (err) {
      notifyWarning(err.message);
    }
  };

  const inputOnChangeHandler = (event, answerId) => {
    const newArr = [...inputAnswers];
    newArr[parseInt(answerId) - 1] = event.target.value;
    setInputAnswers(newArr);
  };


  // const toggleHandler = (item) => () => {
  //     setPeopleInfo((state) => ({
  //         ...state,
  //         [item.id]: state[item.id]
  //             ? null
  //             : {
  //                 id: item.id,
  //                 first: item.name,
  //                 last: item.lastName,
  //                 age: item.age
  //             }
  //     }));
  // };

  // useEffect(() => {
  //     console.log(peopleInfo);
  // }, [peopleInfo]);

  return (
    <div className="min-h-screen md:w-1/2 p-3">
      {index === 1 ? (
        <SlidingAnimation>
          <Intro
            fname={inputAnswers[0]}
            nextBtnClickListner={nextBtnClickListner}
            prevBtnClickListner={prevBtnClickListner}
          />
        </SlidingAnimation>
      ) : null}

      {/* Input Questions */}

      {index === 2 ? (
        <div className="flex flex-col h-full justify-center ">
          <div className="mb-10">
            <h3 className="text-2xl font-medium ">
              {inputQuestions[0].id} &#8594; &nbsp;{inputQuestions[0].question}
              <span className="text-red-900 ml-2">*</span>
            </h3>
            <div className="mx-3 my-5">
              <UserFnameContext.Consumer>
                {({ userFname, setUserFname }) => (
                  <input
                    type="text"
                    placeholder="Type your answer here..."
                    className=" w-full text-lg bg-transparent px-3 py-3 border-b-2 border-b-gray-700 focus:border-b-gray-900 focus:outline-none"
                    value={userFname}
                    onChange={(e) => {
                      setUserFname(e.target.value);
                      setfnme(e.target.value);
                    }}
                  // value={inputAnswers[0]}
                  // onChange={(e) => inputOnChangeHandler(e, inputQuestions[0].id)}
                  />
                )}
              </UserFnameContext.Consumer>
            </div>
          </div>
          <NextPrevBtns
            nextBtnClickListner={nextBtnClickListner}
            prevBtnClickListner={prevBtnClickListner}
          />
        </div>
      ) : null}

      {index === 3 ? (
        <div className="flex flex-col h-full justify-center ">
          <div className="mb-10">
            <h3 className="text-2xl font-medium ">
              {inputQuestions[1].id} &#8594; &nbsp;{inputQuestions[1].question}
              <span className="text-red-900 ml-2">*</span>
            </h3>
            <div className="mx-3 my-5">
              <input
                type="text"
                placeholder="Type your answer here..."
                className=" w-full text-lg bg-transparent px-3 py-3 border-b-2 border-b-gray-700 focus:border-b-gray-900 focus:outline-none"
                value={inputAnswers[1]}
                onChange={(e) => inputOnChangeHandler(e, inputQuestions[1].id)}
              />
            </div>
          </div>
          <NextPrevBtns
            nextBtnClickListner={nextBtnClickListner}
            prevBtnClickListner={prevBtnClickListner}
          />
        </div>
      ) : null}

      {index === 4 ? (
        <div className="flex flex-col h-full justify-center ">
          <div className="mb-10">
            <h3 className="text-2xl font-medium ">
              {inputQuestions[2].id} &#8594; &nbsp;{inputQuestions[2].question}
              <span className="text-red-900 ml-2">*</span>
            </h3>
            <div className="mx-3 my-5">
              <input
                type="text"
                placeholder="Type your answer here..."
                className=" w-full text-lg bg-transparent px-3 py-3 border-b-2 border-b-gray-700 focus:border-b-gray-900 focus:outline-none"
                value={inputAnswers[2]}
                onChange={(e) => inputOnChangeHandler(e, inputQuestions[2].id)}
              />
            </div>
          </div>
          <NextPrevBtns
            nextBtnClickListner={nextBtnClickListner}
            prevBtnClickListner={prevBtnClickListner}
          />
        </div>
      ) : null}

      {/* Check box questions below */}

      {index === 5 ? (
        <div className="flex flex-col h-full justify-center ">
          <div className="mb-10">
            <h3 className="text-2xl font-medium mb-5">
              {checkboxQuestions[0].id} &#8594; &nbsp;
              {checkboxQuestions[0].question}
              <span className="text-red-900 ml-2">*</span>
            </h3>
            {checkboxQuestions[0].options.map((option, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  name={`cb1+${index}`}
                  id={`cb1+${index}`}
                  className="mr-2.5 h-4 w-4"
                  value={option}
                  onChange={(e) => {
                    // alert(e.target.checked)
                    if (e.target.checked) {
                      setCb1([...cb1, e.target.value]);
                    } else {
                      const indexOfElement = cb1.indexOf(e.target.value);
                      setCb1([
                        ...cb1.slice(0, indexOfElement),
                        ...cb1.slice(indexOfElement + 1),
                      ]);
                    }
                  }}
                />
                <label htmlFor={`cb1+${index}`} className="text-lg">
                  {option}
                </label>
              </div>
            ))}
          </div>
          <NextPrevBtns
            nextBtnClickListner={nextBtnClickListner}
            prevBtnClickListner={prevBtnClickListner}
          />
        </div>
      ) : null}

      {index === 6 ? (
        <div className="flex flex-col h-full justify-center ">
          <div className="mb-10">
            <h3 className="text-2xl font-medium mb-5">
              {checkboxQuestions[1].id} &#8594; &nbsp;
              {checkboxQuestions[1].question}
              <span className="text-red-900 ml-2">*</span>
            </h3>
            {checkboxQuestions[1].options.map((option, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  name={`cb2+${index}`}
                  id={`cb2+${index}`}
                  className="mr-2.5 h-4 w-4"
                  value={option}
                  onChange={(e) => {
                    // alert(e.target.checked)
                    if (e.target.checked) {
                      setCb2([...cb2, e.target.value]);
                    } else {
                      const indexOfElement = cb2.indexOf(e.target.value);
                      setCb2([
                        ...cb2.slice(0, indexOfElement),
                        ...cb2.slice(indexOfElement + 1),
                      ]);
                    }
                  }}
                />
                <label htmlFor={`cb2+${index}`} className="text-lg">
                  {option}
                </label>
              </div>
            ))}
          </div>
          <NextPrevBtns
            nextBtnClickListner={nextBtnClickListner}
            prevBtnClickListner={prevBtnClickListner}
          />
        </div>
      ) : null}

      {/* Outro */}
      {index === 7 ? (
        <Outro
          submitQuestions={submitQuestions}
          nextBtnClickListner={nextBtnClickListner}
          prevBtnClickListner={prevBtnClickListner}
        />
      ) : null}
      <ToastContainer />
    </div>
  );
};

export default AllQuestion;
