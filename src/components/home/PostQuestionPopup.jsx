import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Fragment, useEffect, useState } from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { db } from "../../database/firebase.config";
import { createUID } from "../../utils/createUID";
import firebase from "firebase";

export default function PostQuestionPopup({
  isOpen,
  setIsOpen,
  closeModal,
  setRefreshPost,
  refreshPost,
}) {
  const [question, setQuestion] = useState("");
  const [questionCategoryList, setQuestionCategoryList] = useState("");

  const submitHandler = () => {
    if (question === "") {
      alert("Please enter a question.");
      return;
    }
    closeModal(); // to close the model
    setTimeout(async () => {
      alert("Your Question has been submitted : " + question);
      const questionID = await createUID();
      console.log("refresh post " + refreshPost);
      setRefreshPost(!refreshPost);
      await db
        .collection("questions")
        .doc("cIvPTU5LDcmCAQsq4nJO")
        .update({
          [questionID]: {
            question: question,
            questionAskedBy: localStorage.getItem("ds-user-uid"),
            answers: [],
            likeCount: 0,
            likedByUsers: [],
            createdAt: new Date(),
            questionCategoryList: questionCategoryList
              .trim()
              .replaceAll(" ", "")
              .split(","),
          },
        })
        .then(() => {
          console.log("User about me section updated");
        })
        .catch((error) => {
          console.log(error);
        });
      //to increase noOfQuestionsAsked in user collection
      await db
        .collection("users")
        .doc("PrAFinyKta5nDcwAWybe")
        .update({
          [localStorage.getItem("ds-user-uid").concat(".noOfQuestionsAsked")]:
            firebase.firestore.FieldValue.increment(1),
        })
        .then(() => {
          console.log("count updated successfully");
        })
        .catch((e) => {
          console.log(e);
        });
      setQuestion("");
      setQuestionCategoryList("");
    }, 300);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="sm:mx-3 fixed z-10 overflow-y-scroll top-32 sm:top-5 w-full left-0 "
          onClose={closeModal}
        >
          <div className="flex items-center justify-center min-height-100vh pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-900 opacity-75" />
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div
              className="m-3 p-5 inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all  sm:align-middle w-full sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="flex flex-wrap items-center justify-between">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Ask a Question!
                </Dialog.Title>
                <div className="mt-2">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Cancel
                    <XIcon className="h-5 w-5 ml-2 stroke-2 stroke-blue-900" />
                  </button>
                </div>
              </div>
              <div className="my-4">
                <textarea
                  className="w-full border-2 rounded-lg p-2 border-gray-500 text-black cursor-text p2 h-28"
                  placeholder="Enter your Question..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                ></textarea>
                <textarea
                  className="w-full border-2 rounded-lg p-2 mt-3 border-gray-500 text-black cursor-text p2 h-12"
                  placeholder="ex: college, Visa, Abroad Studies "
                  value={questionCategoryList}
                  onChange={(e) => setQuestionCategoryList(e.target.value)}
                ></textarea>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={() => submitHandler()}
                >
                  Submit
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="ml-2 hover:text-blue-600 text-gray-700 text-xl font-bold cursor-pointer "
                  />
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
