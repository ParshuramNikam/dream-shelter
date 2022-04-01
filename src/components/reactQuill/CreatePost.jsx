import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";
import UploadImage from "./UploadImage";
import { db, storage } from "../../database/firebase.config";
import { createUID } from "../../utils/createUID";
import firebase from "firebase";
import UserDetailedInfo from "../UserDetailedInfo";
// import axios from 'axios';

function Add({userDetails}) {
  const [userInfo, setuserInfo] = useState({
    title: "",
    description: "",
    information: "",
  });
  const [blogPostTags, setBlogPostTags] = useState(null);
  const [banner, setBanner] = useState(null);

  const [showDropDown, setShowDropDown] = useState(false);

  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const ondescription = (value) => {
    setuserInfo({
      ...userInfo,
      description: value,
    });
  };
  const oninformation = (value) => {
    setuserInfo({
      ...userInfo,
      information: value,
    });
  };
  const [isError, setError] = useState(null);

  const addDetails = async (event) => {
    const id = createUID();
    try {
      event.preventDefault();
      const { title, description } = userInfo;
      const blogTags = blogPostTags.trim().replaceAll(" ", "").split(",");

      let bucketName = `${localStorage.getItem(
        "ds-user-uid"
      )}/blogPostBannerImages`;
      let file = banner;
      let storageRef = await storage.ref(`${bucketName}/${id}`);
      // const uploadTask = await storageRef.put(file);
      await storageRef
        .put(file)
        .on(firebase.storage.TaskEvent.STATE_CHANGED, async () => {
          let bannerImageURL = await storageRef.fullPath;
          // bannerImageURL.then((result) => {
          //   console.log(result);
          // });
          console.log(bannerImageURL);
        });

      await db
        .collection("blogPosts")
        .doc("suMBrSmkTuc5f4vwPdYC")
        .update({
          [id]: {
            blogUserId: localStorage.getItem('ds-user-uid'),
            title: title,
            description: description,
            tags: await blogPostTags.trim().replaceAll(" ", "").split(","),
            createdAt: new Date(),
            fname: userDetails.fname,
            lname: userDetails.lname,
            photoURL: userDetails.photoURL,
          },
        })
        .then(() => {
          console.log("Blog post added succesfully!");
        })
        .catch((err) => console.log(err));

      alert(title + "    " + description);
      //   event.persist();
      //   if(userInfo.description.length < 50){
      //     setError('Required, Add description minimum length 50 characters');
      //     return;
      //   }
      //   axios.post(`http://localhost:8080/addArticle`, {
      //     title: userInfo.title,
      //     description: userInfo.description,
      //     information: userInfo.information,
      //   })
      //   .then(res => {
      //     if(res.data.success === true){
      //       history.push('/');
      //     }
      //   })
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="mx-3">
      <div className=" max-w-6xl mx-auto">
        <div className="">
          <div className="row mt-3">
            <form onSubmit={addDetails} className="update__forms">
              <span className="font-semibold">Blog Title : </span>

              <div className="form-row mt-3 m-1">
                <div className="bg-white rounded relative z-0 mb-3 w-full group">
                  <textarea
                    name="title"
                    rows={1}
                    className="text-black block py-2.5 px-0.5 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-800 dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
                    placeholder=" "
                    required
                    onChange={(e) =>
                      setuserInfo({ ...userInfo, title: e.target.value })
                    }
                  />
                  <label
                    for="title"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Blog Title
                  </label>
                </div>

                <UploadImage banner={banner} setBanner={setBanner} />

                <div>Enter tags for your blog:</div>
                <textarea
                  className="w-full border-2 rounded-lg p-2 mt-3 border-gray-500 text-black cursor-text p2 h-12"
                  placeholder="ex: college, Visa, Abroad Studies "
                  value={blogPostTags}
                  onChange={(e) => setBlogPostTags(e.target.value)}
                ></textarea>

                <div className="clearfix"></div>
                <div className="form-group col-md-12 editor">
                  <label className="font-semibold text-lg">
                    {" "}
                    Description{" "}
                    <span className="required text-red-500">* </span>{" "}
                  </label>
                  <br />
                  <div className="bg-white">
                    <EditorToolbar toolbarId={"t1"} />
                   
                    <ReactQuill
                      theme="snow"
                      value={userInfo.description}
                      onChange={ondescription}
                      placeholder={"Describe here..."}
                    ></ReactQuill>
                    
                    {/* below code for editor with images and other options */}
                    {/* <ReactQuill
                      theme="snow"
                      value={userInfo.description}
                      onChange={ondescription}
                      placeholder={"Describe here..."}
                      modules={modules("t1")}
                      formats={formats}
                    /> */}
                  </div>
                </div>

                <div className="mx-auto rounded text-center m-2 w-32 text-white px-5 py-2.5 bg-indigo-500">
                  <button type="submit" className="btn btn__theme ">
                    {" "}
                    Submit{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Add;
