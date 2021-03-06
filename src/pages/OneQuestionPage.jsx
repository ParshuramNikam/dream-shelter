import { ChatAlt2Icon, PencilAltIcon } from "@heroicons/react/outline";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useLocation } from "react-router-dom";
import {
  HeartIcon,
  ShareIcon,
  XCircleIcon,
  XIcon,
} from "@heroicons/react/outline";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { db } from "../database/firebase.config";
import firebase from "firebase";
import { notifySuccess, notifyWarning } from "../utils/reactToast.js";

const OneQuestionPage = ({ question, answers }) => {
  const { questionId } = useParams();
  const [questionDetails, setQuestionDetails] = useState(null);

  const [postBtnClick, setPostBtnClick] = useState({
    like: false,
    answer: false,
    share: false,
  });

  const [signedInUserAnswer, setSignedInUserAnswer] = useState("");

  // Question asked by user details
  const [qAskedByUserDetails, setQAskedByUserDetails] = useState(null);
  const [firstAnsGivenByUserDeatils, setFirstAnsGivenByUserDeatils] =
    useState(null);

  const [postOptions, setPostOptions] = useState([]);
  const [currentLikes, setCurrentLikes] = useState(0);
  const [uniqueUserIds, setUniqueUserIds] = useState([]);
  const [uniqueUsersDetails, setUniqueUserDetails] = useState([]);

  async function extractUniqueIds(snapshot) {
    return [...new Set(snapshot.data().answers.map((item) => item.answeredBy))];
  }

  useEffect(() => {
    db.collection("Questions")
      .doc(questionId)
      .get()
      .then(async (snapshot) => {
        await setQuestionDetails(snapshot.data());
        setCurrentLikes(snapshot.data().likeCount);

        if (
          snapshot.data().likedByUsers &&
          snapshot
            .data()
            .likedByUsers.includes(
              localStorage.getItem("ds-user-uid").toString()
            )
        ) {
          setPostBtnClick({ ...postBtnClick, like: true });
        }
        // const unique = [...new Set(data.map(item => item.group))];
        // setUniqueUserIds([
        //   ...new Set(snapshot.data().answers.map((item) => item.answeredBy)),
        // ]);
        extractUniqueIds(snapshot).then((uniqueIds) => {
            console.log(uniqueIds)
          uniqueIds.map((userId) => {
            db.collection("Users")
              .get()
              .then(async (doc) => {
                const userData = await doc.data();
                setUniqueUserDetails((userDetails) => [
                  ...userDetails,
                  { userId: userId,
                    userData: userData
                },
                ]);
              });
          });
        });
      })
      .then(() => {
        console.log("cuurent question details are : ", questionDetails);
        uniqueUserIds.forEach(async (userId) => {
          db.collection("Questions")
            .doc(userId)
            .get()
            .then(async (snapshot) => {
              // console.log(snapshot);
              // snapshot.forEach(doc=>{
              console.log(snapshot.data());
              // })
            });
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const postBtnClickAction = async (btn) => {
    btn = btn.toLowerCase();
    switch (btn) {
      case "like":
        await setPostBtnClick({ ...postBtnClick, like: !postBtnClick.like });
        if (postBtnClick.like) {
          await setCurrentLikes(currentLikes - 1);
          await db
            .collection("Questions")
            .doc(questionId)
            .update({
              likedByUsers: firebase.firestore.FieldValue.arrayRemove(
                localStorage.getItem("ds-user-uid")
              ),
            });
          await db
            .collection("Questions")
            .doc(questionId)
            .update({
              likeCount: firebase.firestore.FieldValue.increment(-1),
            });
        } else {
          await setCurrentLikes(currentLikes + 1);
          await db
            .collection("Questions")
            .doc(questionId)
            .update({
              likedByUsers: firebase.firestore.FieldValue.arrayUnion(
                localStorage.getItem("ds-user-uid")
              ),
            });
          await db
            .collection("Questions")
            .doc(questionId)
            .update({
              likeCount: firebase.firestore.FieldValue.increment(1),
            });
        }
        break;
      case "answer":
        setPostBtnClick({ ...postBtnClick, answer: !postBtnClick.answer });
        // alert("answer btn cliked");
        break;
      case "share":
        // setPostBtnClick({...postBtnClick, answer: !postBtnClick.answer});
        alert("Share btn cliked");
        break;
      default:
        break;
    }
  };

  const answerSubmitHandler = async () => {
    console.log("Your answer is : ", signedInUserAnswer);

    if (signedInUserAnswer === "") {
      return notifyWarning("Please, enter your answer!");
    }

    await db
      .collection("Questions")
      .doc(questionId)
      .update({
        answers: firebase.firestore.FieldValue.arrayUnion({
          answer: signedInUserAnswer,
          answeredBy: localStorage.getItem("ds-user-uid"),
        }),
      })
      .then(() => {
        setSignedInUserAnswer("");
        setPostBtnClick({ ...postBtnClick, answer: false });
        console.log("new answer added to array in db");
        notifySuccess("Your answer submitted successfully!");
      })
      .catch((err) => console.log(err));
  };

  return (
    questionDetails && (
      <section className="max-w-6xl mx-auto my-2 p-1.5">
        <h1 className="text-xl sm:text-2xl font-semibold text-center">
          {questionDetails.question}
        </h1>

        <div className="px-1 py-1 grid grid-cols-3">
          <button
            className=" flex items-center justify-center hover:bg-gray-100 px-0 py-2 rounded-md cursor-pointer"
            onClick={() => postBtnClickAction("like")}
          >
            <span className="font-semibold">{currentLikes}</span> &nbsp;&nbsp;
            <HeartIcon
              className={`h-6 w-6 text-black  ${
                postBtnClick.like
                  ? "fill-rose-600 text-rose-600 outline-none"
                  : "hover:text-gray-600"
              } `}
            />
            <p className="ml-2">{postBtnClick.like ? "Unlike" : "Like"}</p>
          </button>
          <button
            className="flex items-center justify-center hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer"
            onClick={() => postBtnClickAction("share")}
          >
            <ShareIcon className="h-6 w-6 text-black hover:text-gray-600" />
            <p className="ml-2">share</p>
          </button>
          <button
            className="flex items-center justify-center hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer"
            onClick={() => postBtnClickAction("answer")}
          >
            <PencilAltIcon className="h-6 w-6 text-black hover:text-gray-600" />
            <p className="ml-2">Answer</p>
          </button>
        </div>

        <div
          className={`${
            !postBtnClick.answer ? "hidden" : null
          } xl:max-w-3xl mx-auto transition-all duration-1000 ease-linear m-3 border-t-2 border-t-gray-300`}
        >
          <textarea
            name="answerTextArea"
            id="answerTextArea"
            placeholder="Write your answer..."
            className="w-full mt-4 p-2 h-20 focus:outline-none focus:border-gray-900 rounded-md border-2 border-gray-600 "
            value={signedInUserAnswer}
            onChange={(e) => setSignedInUserAnswer(e.target.value)}
          />
          <div className="flex justify-between items-center">
            <button
              className="mt-0.5 px-3 py-2 text-white rounded bg-indigo-500 hover:bg-indigo-600"
              onClick={answerSubmitHandler}
            >
              Submit answer
            </button>
            <button
              className=" mt-1.5 cursor-pointer hover:text-indigo-700 text-indigo-500 rounded "
              onClick={() =>
                setPostBtnClick({ ...postBtnClick, answer: false })
              }
            >
              <XCircleIcon className="w-8 h-8" />
            </button>
          </div>
        </div>

        <div className="border-t-2 border-t-gray-300 mt-3 pt-3">
          <h3 className="font-semibold text-xl">Answers:</h3>
          {questionDetails &&
          questionDetails.answers &&
          questionDetails.answers.length > 0
            ? questionDetails.answers.map((details, index) => (
                <div key={index} className="my-3 p-1">
                  {/* { */}
                            {/* // uniqueUsersDetails && 
                            // uniqueUsersDetails[uniqueUsersDetails]    */}
                      <span>index=[{index}] </span> <br />
                  userId: {details.answeredBy} <br />
                  answer: {details.answer}
                  {/* } */}
                </div>
              ))
            : "no answeres yet!!"}
        </div>
      </section>
    )
  );
};

export default OneQuestionPage;
