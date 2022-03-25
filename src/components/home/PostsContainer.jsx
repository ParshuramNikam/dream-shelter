import NoPosts from "../UserProfile/NoPosts";
import PostCard from "./PostCard";
import { createContext, useEffect, useState, useContext } from "react";
import { db } from "../../database/firebase.config";
import QuestionLoadingSkeleton from "./QuestionLoadingSkeleton";

const PostsContainer = () => {
  const [questionIds, setQuestionIds] = useState([]);
  const [questionArray, setQuestionArray] = useState([]);
  useEffect(() => {
    db.collection("questions")
      .doc("cIvPTU5LDcmCAQsq4nJO")
      // .orderBy("createdAt", "desc")
      .get()
      .then(async (snapshot) => {
        console.log(snapshot.data());
        await setQuestionIds(Object.keys(snapshot.data()));
        await Object.keys(snapshot.data()).forEach((id) => {
          setQuestionArray((prevQuestionArray) => [
            ...prevQuestionArray,
            { questionId: id, questionDetails: snapshot.data()[id] },
          ]);
        });
        // snapshot.docs.forEach(async (doc) => {
        //   let userData = [];
        // 		snapshot.docs.forEach((doc) => {
        // 			console.log(doc.data());
        // 			userData = [{ ...doc.data(), id: doc.id }];
        // 		});
        //     console.log(userData)
        // });
      });
  }, []);

  return questionArray.length > 0 ? (
    <section className="overflow-y-auto px-2 w-full">
      {/* <NoPosts /> */}

      {questionArray.map((question, index) => (
        <PostCard
          index={index}
          questionId={question.questionId}
          question={question.questionDetails.question}
          answers={question.questionDetails.answers}
          questionAskedBy={question.questionDetails.questionAskedBy}
          questionCategoryList={question.questionDetails.questionCategoryList}
          likeCount={question.questionDetails.likeCount}
          likedByUsers={question.questionDetails.likedByUsers}
        />
      ))}

      {/* <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/> */}
    </section>
  ) : (
    <>
      <QuestionLoadingSkeleton />
      <QuestionLoadingSkeleton />
      <QuestionLoadingSkeleton />
    </>
  );
};

export default PostsContainer;
