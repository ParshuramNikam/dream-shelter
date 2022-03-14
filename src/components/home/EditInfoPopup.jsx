import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import { faCircleCheck, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EditInfoPopup({ isOpen, setIsOpen, closeModal }) {
  const [question, setQuestion] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [profession, setprofession] = useState("");
  const [status, setStatus] = useState("");
  const [address, setaddress] = useState("");
  const [work, setwork] = useState("");
  const [college, setcollege] = useState("");

  const submitHandler = () => {
    if (question === "") {
      alert("Please enter a question.");
      return;
    }
    closeModal(); // to close the model
    setTimeout(() => {
      alert("Your Question has been submitted : " + question);
      setQuestion("");
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
          <div class="flex items-center justify-center min-height-100vh pt-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity">
              <div class="absolute inset-0 bg-gray-900 opacity-75" />
            </div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div
              class="m-3 p-5 inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all  sm:align-middle w-full sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="flex flex-wrap items-center justify-between">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Edit Profile
                </Dialog.Title>
                <div className="mt-2">
                  <button
                    type="button"
                    className="inline-flex justify-center p-1 text-sm font-medium text-black  border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 "
                    onClick={closeModal}
                  >
                    <XIcon className="h-6 w-6 " />
                  </button>
                </div>
              </div>
              <hr className="h-0.5  bg-gray-500"></hr>
              <div className="flex justify-evenly mt-4 mb-2">
                <div className="mt-2">First Name :</div>
                <div className="">
                  <input
                    className="w-80 border-2 rounded-lg p-2 border-gray-500 text-black "
                    placeholder="John "
                    value={fname}
                    onChange={(e) => setfname(e.target.value)}
                  ></input>
                </div>
              </div>
              <hr className=" bg-gray-300"></hr>
              <div className="flex justify-evenly my-2">
                <div className="mt-2">Last Name :</div>
                <div className="">
                  <input
                    className="w-80 border-2 rounded-lg p-2 border-gray-500 text-black "
                    placeholder="Doe "
                    value={lname}
                    onChange={(e) => setlname(e.target.value)}
                  ></input>
                </div>
              </div>
              <hr className=" bg-gray-300"></hr>
              <div className="flex justify-evenly my-2">
                <div className="mt-2">Profession :</div>
                <div className="">
                  <input
                    className="w-80 border-2 rounded-lg p-2 border-gray-500 text-black "
                    placeholder="Full-Stack Developer "
                    value={profession}
                    onChange={(e) => setprofession(e.target.value)}
                  ></input>
                </div>
              </div>
              <hr className=" bg-gray-300"></hr>
              <div className="flex justify-evenly my-2">
                <div className="mt-2 mr-7">Status :</div>
                <div className="">
                  <input
                    className="w-80 border-2 rounded-lg p-2 border-gray-500 text-black "
                    placeholder="Tell About yourself in one line "
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  ></input>
                </div>
              </div>
              <hr className=" bg-gray-300"></hr>
              <div className="flex justify-evenly my-2">
                <div className="mt-2 mr-3">Address :</div>
                <div className="">
                  <input
                    className="w-80 border-2 rounded-lg p-2 border-gray-500 text-black "
                    placeholder="New York city, USA "
                    value={address}
                    onChange={(e) => setaddress(e.target.value)}
                  ></input>
                </div>
              </div>
              <hr className=" bg-gray-300"></hr>
              <div className="flex justify-evenly my-2">
                <div className="mt-2 ">Working at :</div>
                <div className="mr-1">
                  <input
                    className="w-80 border-2 rounded-lg p-2 border-gray-500 text-black "
                    placeholder="Manager at  Gleichner, Mueller "
                    value={work}
                    onChange={(e) => setwork(e.target.value)}
                  ></input>
                </div>
              </div>
              <hr className=" bg-gray-300"></hr>
              <div className="flex justify-evenly my-2">
                <p className="mt-2">Studing at :</p>
                <div className="">
                  <input
                    className="w-80 border-2 rounded-lg p-2 border-gray-500 text-black "
                    placeholder="Studied at  Nikolaus - Leuschke "
                    value={college}
                    onChange={(e) => setcollege(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-1 text-lg font-medium text-white  bg-cyan-800 border border-transparent rounded-md hover:bg-cyan-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={() => submitHandler()}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
