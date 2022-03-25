import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useLocation } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  BellIcon,
  BookmarkIcon,
  ChatIcon,
  HeartIcon,
  LinkIcon,
  MenuIcon,
  ShareIcon,
  XCircleIcon,
  PencilAltIcon,
  XIcon,
  ChatAlt2Icon,
} from "@heroicons/react/outline";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { db } from "../../database/firebase.config";
import firebase from "firebase";
import { notifySuccess, notifyWarning } from "../../utils/reactToast.js";

const PostCard = ({
  index,
  questionId,
  question,
  answers,
  questionAskedBy,
  questionCategoryList,
  likeCount,
  likedByUsers,
}) => {
  const location = useLocation();

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
  const [currentLikes, setCurrentLikes] = useState(likeCount);

  // for clipboard
  const [value, setValue] = useState(
    "http://localhost:3000/question/" + questionId
  );
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (
      likedByUsers &&
      likedByUsers.includes(localStorage.getItem("ds-user-uid").toString())
    ) {
      setPostBtnClick({ ...postBtnClick, like: true });
    }

    // userDetails of the user who asked this question
    db.collection("users")
      .doc("PrAFinyKta5nDcwAWybe")
      .get()
      .then((userDetails) => {
        console.log(userDetails.data());
        const userData = userDetails.data()[questionAskedBy];
        const userId = questionAskedBy;
        setQAskedByUserDetails({ userData, userId });
      })
      .catch((error) => {
        console.log(error);
      });

    // userDetails of the user who asked this question
    if (answers && answers[0]) {
      console.log(answers[0] && answers[0].answeredBy);
      db.collection("Users")
        .doc(answers[0].answeredBy.toString())
        .get()
        .then((userDetails) => {
          const userData = userDetails.data();
          const userId = userDetails.id;
          console.log("Answers given by user : ", userData, userId);
          setFirstAnsGivenByUserDeatils({ userData, userId });
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (location.pathname == "/bookmarks") {
      setPostOptions(["unsave", "copy link"]);
    } else if (location.pathname == "/") {
      setPostOptions(["save", "copy link", "unfollow"]);
    }
  }, []);

  const postBtnClickAction = async (btn) => {
    btn = btn.toLowerCase();
    switch (btn) {
      case "like":
        console.log(questionId);
        await setPostBtnClick({ ...postBtnClick, like: !postBtnClick.like });
        if (postBtnClick.like) {
          await setCurrentLikes(currentLikes - 1);
          await db
            .collection("questions")
            .doc("cIvPTU5LDcmCAQsq4nJO")
            .update(
              {
                [questionId.concat(".likedByUsers")]:
                  firebase.firestore.FieldValue.arrayRemove(
                    localStorage.getItem("ds-user-uid")
                  ),
              },
              { merge: true }
            ).catch((e)=>{
              console.log(e);
            })
          await db
            .collection("questions")
            .doc("cIvPTU5LDcmCAQsq4nJO")
            .update({
              [questionId.concat(".likeCount")]: firebase.firestore.FieldValue.increment(-1),
            }).catch((e)=>{
              console.log(e);
            })
        } else {
          await setCurrentLikes(currentLikes + 1);
          await db
            .collection("questions")
            .doc("cIvPTU5LDcmCAQsq4nJO")
            .update(
              {
                [questionId.concat(".likedByUsers")]:
                  firebase.firestore.FieldValue.arrayUnion(
                    localStorage.getItem("ds-user-uid")
                  ),
              },
              { merge: true }
            ).catch((e)=>{
              console.log(e);
            })
          await db
            .collection("questions")
            .doc('cIvPTU5LDcmCAQsq4nJO')
            .update({
              [questionId.concat(".likeCount")]: firebase.firestore.FieldValue.increment(1),
            }).catch((e)=>{
              console.log(e);
            })
        }
        break;
      case "answer":
        setPostBtnClick({ ...postBtnClick, answer: !postBtnClick.answer });
        // alert("answer btn cliked");
        break;
      case "share":
        // setPostBtnClick({...postBtnClick, answer: !postBtnClick.answer});
        alert("Increase share count only once");
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
    <div key={index} className="pt-2 flex justify-center h-max">
      {/* CARD */}
      <div className="post_card w-full rounded-lg overflow-hidden shadow-lg py-2 bg-white border border-gray-200">
        {/* Post header 👇 */}
        <div className="flex  items-center justify-between px-4 pt-2">
          <Link to={"/OtherProfilePage"}>
            <div className="flex  items-center">
              <img
                className="w-10 mt-1 rounded-full"
                // src="https://shortner-urls.herokuapp.com/BeKgZyu"
                src={
                  qAskedByUserDetails &&
                  qAskedByUserDetails.userData &&
                  qAskedByUserDetails.userData.photoURL
                    ? qAskedByUserDetails.userData.photoURL
                    : "https://shortner-urls.herokuapp.com/BeKgZyu"
                }
                alt="Avatar"
              />

              <div className="text-xs ml-2">
                <p className="font-bold ">
                  {qAskedByUserDetails &&
                  qAskedByUserDetails.userData &&
                  qAskedByUserDetails.userData.fname &&
                  qAskedByUserDetails.userData.lname
                    ? qAskedByUserDetails.userData.fname +
                      " " +
                      qAskedByUserDetails.userData.lname
                    : ""}
                </p>
                <p>
                  {qAskedByUserDetails &&
                  qAskedByUserDetails.userData &&
                  qAskedByUserDetails.userData.location
                    ? qAskedByUserDetails.userData.location
                    : ""}
                </p>
              </div>
            </div>
          </Link>

          {/* Post header menu -> three dots */}
          <Menu as="div" className="ml-3 relative">
            <div>
              <Menu.Button className=" flex text-sm ">
                <span className="sr-only">Open user menu</span>
                <div className="font-lg">&#xFE19;</div>{" "}
                {/* &#xFE19; => html code for 3  dots */}
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                {postOptions.map((option, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <button
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700 w-full"
                        )}
                      >
                        {option.toLowerCase() === "save" ? (
                          <BookmarkIcon className="h-4 w-4 flex float-left mr-3 stroke-1 stroke-indigo-800" />
                        ) : null}
                        {option.toLowerCase() === "unsave" ? (
                          <BookmarkIcon className="h-4 w-4 flex float-left mr-3 stroke-1 stroke-indigo-800" />
                        ) : null}
                        {option.toLowerCase() === "copy link" ? (
                          <LinkIcon className="h-4 w-4 flex float-left mr-3 stroke-1 stroke-indigo-800" />
                        ) : null}
                        {option.toLowerCase() === "unfollow" ? (
                          <XCircleIcon className="h-4 w-4 flex float-left mr-3 stroke-1 stroke-indigo-800" />
                        ) : null}
                        <p className="float-left font-bold">{option}</p>
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        {/* Post Question answer */}
        <div className="px-6 py-4">
          <Link to={"/question/" + questionId}>
            <div className="font-bold text-xl mb-2 hover:underline cursor-pointer">
              {question ? question : ""}
            </div>
          </Link>
          <div className="text-gray-700 text-base">
            {answers && answers[0] ? (
              <div>
                {firstAnsGivenByUserDeatils &&
                firstAnsGivenByUserDeatils.userData &&
                firstAnsGivenByUserDeatils.userData.photoURL ? (
                  <>
                    <div className=" flex gap-3 ">
                      <img
                        className="w-8 h-8 mt-1 rounded-full"
                        src={firstAnsGivenByUserDeatils.userData.photoURL}
                        alt="ansBy"
                      />
                      <div className="bg-gray-100 w-full mr-1 my-1 p-1 rounded-tr rounded-br rounded-bl">
                        <p className="text-sm font-semibold text-black">
                          {firstAnsGivenByUserDeatils.userData.fname &&
                            firstAnsGivenByUserDeatils.userData.fname}
                          &nbsp;
                          {firstAnsGivenByUserDeatils.userData.lname &&
                            firstAnsGivenByUserDeatils.userData.lname}
                        </p>
                        <p className="">{answers[0].answer}</p>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            ) : (
              "no answeres yet!!"
            )}
          </div>
        </div>

        {/* Tages */}
        <div className="px-6 pt-4 pb-2">
          {questionCategoryList &&
            questionCategoryList.map((category, index) => (
              <span
                key={index}
                className="inline-block rounded-full px-3 py-1 text-sm font-semibold bg-gray-100 text-gray-700 mr-2 mb-2"
              >
                #{category}
              </span>
            ))}
        </div>

        <div className="px-3 py-1 grid grid-cols-4">
          <button
            className="flex items-center justify-center hover:bg-gray-100 px-1 py-2 rounded-md cursor-pointer"
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
            {/* <p className="ml-2">{postBtnClick.like ? 'Unlike' : 'Like'}</p> */}
          </button>
          <button
            className="flex items-center justify-center hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer"
            // onClick={() => postBtnClickAction("answer")}
          >
            <Link className="" to={"/question/" + questionId}>
              <ChatAlt2Icon className="h-6 w-6 text-black hover:text-gray-600" />
            </Link>
          </button>
          <button
            className="flex items-center justify-center hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer"
            onClick={() => postBtnClickAction("answer")}
          >
            <PencilAltIcon className="h-6 w-6 text-black hover:text-gray-600" />
          </button>

          <CopyToClipboard
            options={{ message: "" }}
            text={value}
            onCopy={() => {
              setCopied(true);
              notifySuccess("Link copied to clipboard!");
            }}
          >
            <button
              className="flex items-center justify-center hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer"
              onClick={() => postBtnClickAction("share")}
            >
              <ShareIcon className="h-6 w-6 text-black hover:text-gray-600" />
            </button>
          </CopyToClipboard>
        </div>

        <div
          className={`${
            !postBtnClick.answer ? "hidden" : null
          } transition-all duration-150 ease-linear m-3 border-t-2 border-t-gray-300`}
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
      </div>
    </div>
  );
};

export default PostCard;
