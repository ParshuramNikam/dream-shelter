import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
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
import firebase from "firebase";
import { useUserAuth } from "../../context/UserAuthContextProvider";

const AllQuestion2 = () => {
  const { user } = useUserAuth();

  const [inputAnswers, setInputAnswers] = useState({
    fname: "",
    lname: "",
    location: "",
  });

  const [cb1, setCb1] = useState([]);
  const [cb2, setCb2] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(1);

  const nextBtnClickListner = (index, answer) => {
    setCurrentIndex(currentIndex + 1);
  };

  const prevBtnClickListner = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const history = useHistory();

  const submitQuestions = () => {
    if (
      inputAnswers.fname !== "" ||
      inputAnswers.lname !== "" ||
      inputAnswers.location !== "" ||
      cb1.length !== 0 ||
      cb2.length !== 0
    ) {
      try {
        // interest: Array.from(new Set(cb1)),
        // activityWantsToDo: Array.from(new Set(cb2)),
        // fname: inputAnswers.fname,
        // lname: inputAnswers.lname,
        // location: inputAnswers.location,
        db.collection("users")
          .doc("PrAFinyKta5nDcwAWybe")
          .update(
            {
              [user.uid.concat(".interest")]: Array.from(new Set(cb1)),
              [user.uid.concat(".activityWantsToDo")]: Array.from(new Set(cb2)),
              [user.uid.concat(".fname")]: inputAnswers.fname,
              [user.uid.concat(".lname")]: inputAnswers.lname,
              [user.uid.concat(".location")]: inputAnswers.location,
            },
            { merge: true }
          );
        notifySuccess("Submited your answers!");
        history.push("/");
      } catch (err) {
        notifyWarning(err.message);
      }
    } else {
      notifyWarning("All question required!!");
    }
  };

  return (
    <div className="min-h-screen md:w-1/2 p-3">
      {currentIndex === 1 ? (
        <SlidingAnimation>
          <div className="flex h-full justify-center items-center">
            <div>
              <h1 className="font-serif my-3 text-2xl font-medium ">
                <span className="">&ldquo;</span> Let's get you set up
              </h1>
              <p className="text-lg mx-2 text-gray-800">
                It only takes a moment. And it'll make your time with
                DreamShelter forum even better.
              </p>
              <button
                className="float-right mt-8 bg-gray-800 text-white py-2.5 px-6 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-800"
                onClick={nextBtnClickListner}
              >
                Get set up
              </button>
            </div>
          </div>
        </SlidingAnimation>
      ) : null}

      {/* Input Questions */}
      {currentIndex === 2 ? (
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
                      setInputAnswers({
                        ...inputAnswers,
                        fname: e.target.value,
                      });
                    }}
                  />
                )}
              </UserFnameContext.Consumer>
            </div>
          </div>
          <div className="relative bottom-3 right-3">
            <div className="flex justify-center items-center w-max">
              <button
                className="p-2 m-2 bg-gray-400 rounded-full"
                onClick={prevBtnClickListner}
              >
                <ArrowLeftIcon className="h-5 w-5 stroke stroke-gray-800" />
              </button>

              <button
                className={`${
                  inputAnswers.fname === ""
                    ? "bg-neutral-300 cursor-not-allowed"
                    : null
                } p-2 m-2 bg-gray-400 rounded-full`}
                onClick={nextBtnClickListner}
                disabled={inputAnswers.fname === ""}
              >
                <ArrowRightIcon className="h-5 w-5 stroke stroke-gray-800" />
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {currentIndex === 3 ? (
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
                value={inputAnswers.lname}
                onChange={(e) => {
                  setInputAnswers({ ...inputAnswers, lname: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="relative bottom-3 right-3">
            <div className="flex justify-center items-center w-max">
              <button
                className={` p-2 m-2 bg-gray-400 rounded-full`}
                onClick={prevBtnClickListner}
              >
                <ArrowLeftIcon className="h-5 w-5 stroke stroke-gray-800" />
              </button>

              <button
                className={`${
                  inputAnswers.lname === ""
                    ? "bg-neutral-300 cursor-not-allowed"
                    : null
                } p-2 m-2 bg-gray-400 rounded-full`}
                onClick={nextBtnClickListner}
                disabled={inputAnswers.lname === ""}
              >
                <ArrowRightIcon className="h-5 w-5 stroke stroke-gray-800" />
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {currentIndex === 4 ? (
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
                value={inputAnswers.location}
                onChange={(e) => {
                  setInputAnswers({
                    ...inputAnswers,
                    location: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="relative bottom-3 right-3">
            <div className="flex justify-center items-center w-max">
              <button
                className={` p-2 m-2 bg-gray-400 rounded-full`}
                onClick={prevBtnClickListner}
              >
                <ArrowLeftIcon className="h-5 w-5 stroke stroke-gray-800" />
              </button>

              <button
                className={`${
                  inputAnswers.location === ""
                    ? "bg-neutral-300 cursor-not-allowed"
                    : null
                } p-2 m-2 bg-gray-400 rounded-full`}
                onClick={nextBtnClickListner}
                disabled={inputAnswers.location === ""}
              >
                <ArrowRightIcon className="h-5 w-5 stroke stroke-gray-800" />
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {currentIndex === 5 ? (
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
          <div className="flex">
            <button
              className={` p-2 m-2 bg-gray-400 rounded-full`}
              onClick={prevBtnClickListner}
            >
              <ArrowLeftIcon className="h-5 w-5 stroke stroke-gray-800" />
            </button>

            <button
              className={`${
                cb1.length === 0 ? "bg-neutral-300 cursor-not-allowed" : null
              } p-2 m-2 bg-gray-400 rounded-full`}
              onClick={nextBtnClickListner}
              disabled={cb1.length === 0}
            >
              <ArrowRightIcon className="h-5 w-5 stroke stroke-gray-800" />
            </button>
          </div>
        </div>
      ) : null}

      {currentIndex === 6 ? (
        <div className="flex flex-col h-full justify-center ">
          <div className="mb-10">
            <h3 className="text-2xl font-medium mb-5">
              {checkboxQuestions[1].id} &#8594; &nbsp;
              {checkboxQuestions[1].question}
              <span className="text-red-900 ml-2">*</span>
            </h3>
            {checkboxQuestions[0].options.map((option, index) => (
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
                        ...cb1.slice(0, indexOfElement),
                        ...cb1.slice(indexOfElement + 1),
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
          <div className="flex">
            <button
              className={` p-2 m-2 bg-gray-400 rounded-full`}
              onClick={prevBtnClickListner}
            >
              <ArrowLeftIcon className="h-5 w-5 stroke stroke-gray-800" />
            </button>

            <button
              className={`${
                cb2.length === 0 ? "bg-neutral-300 cursor-not-allowed" : null
              } p-2 m-2 bg-gray-400 rounded-full`}
              onClick={nextBtnClickListner}
              disabled={cb2.length === 0}
            >
              <ArrowRightIcon className="h-5 w-5 stroke stroke-gray-800" />
            </button>
          </div>
        </div>
      ) : null}

      {/* Outro */}
      {currentIndex === 7 ? (
        <div className="flex h-full justify-center items-center">
          <div>
            <h1 className="font-serif my-3 text-2xl font-medium ">
              Fantastic—you're all set!
            </h1>
            <div className="flex justify-between">
              <button
                className="mt-8 bg-gray-800 text-white py-2.5 px-6 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-800"
                onClick={prevBtnClickListner}
              >
                back
              </button>
              <button
                className="mt-8 bg-gray-800 text-white py-2.5 px-6 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-800"
                onClick={submitQuestions}
              >
                Let's do this
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <ToastContainer />
    </div>
  );
};

export default AllQuestion2;
