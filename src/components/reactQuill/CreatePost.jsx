import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";
import { useHistory } from "react-router-dom";
import UploadImage from "./UploadImage";
// import axios from 'axios';

function Add() {
    let history = useHistory();
    const [userInfo, setuserInfo] = useState({
        title: '',
        description: '',
        information: '',
    });

    const [showDropDown, setShowDropDown] = useState(false);
    const [postType, setPostType] = useState("select");

    const onChangeValue = (e) => {
        setuserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        });
    }
    const ondescription = (value) => {
        setuserInfo({
            ...userInfo,
            description: value
        });
    }
    const oninformation = (value) => {
        setuserInfo({
            ...userInfo,
            information: value
        });
    }
    const [isError, setError] = useState(null);
    const addDetails = async (event) => {
        try {
            event.preventDefault();
            const { title, description } = userInfo;
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
        } catch (error) { throw error; }
    }

    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <div className="container mx-auto">
                    <div className="row mt-3">
                        <form onSubmit={addDetails} className="update__forms">
                            <span className="font-semibold">Select Post Type : </span>

                            <select name="post_type" id="post_type"
                                onChange={(e) => setPostType(e.target.value)}
                                className="px-2 py-1.5 text-gary-800 bg-gray-300 "
                                defaultValue={"select"}
                            >
                                <option value="select" className="text-center bg-gray-200" disabled> --- Select Option --- </option>
                                <option value="question" className="text-center bg-gray-200" >Question</option>
                                <option value="blog" className="text-center bg-gray-200" >Blog</option>
                            </select>

                            {
                                postType !== "select" ?
                                    <div className="form-row mt-5 m-1">

                                        <div className="bg-white rounded relative z-0 mb-3 w-full group">
                                            <textarea name="title" rows={1} className="text-black block py-2.5 px-0.5 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-800 dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
                                                placeholder=" " required
                                                onChange={(e) => setuserInfo({ ...userInfo, title: e.target.value })}
                                            />
                                            <label for="title" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{postType === "question" ? "Question" : "Post Title"}</label>
                                        </div>

                                        {
                                            postType === "blog"
                                            ? <UploadImage />
                                            : null
                                        }

                                        <div className="clearfix"></div>
                                        <div className="form-group col-md-12 editor">
                                            <label className="font-semibold text-lg"> Description <span className="required text-red-500">* </span> </label>
                                            <br />
                                            <div className="bg-white">
                                                <EditorToolbar toolbarId={'t1'} />
                                                <ReactQuill
                                                    theme="snow"
                                                    value={userInfo.description}
                                                    onChange={ondescription}
                                                    placeholder={"Describe here..."}
                                                    modules={modules('t1')}
                                                    formats={formats}
                                                />
                                            </div>
                                        </div>

                                        <div className="mx-auto rounded text-center m-2 w-32 text-white px-5 py-2.5 bg-indigo-500">
                                            <button type="submit" className="btn btn__theme "> Submit  </button>
                                        </div>
                                    </div>
                                    : null

                            }

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Add