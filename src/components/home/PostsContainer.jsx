import NoPosts from "../UserProfile/NoPosts";
import PostCard from "./PostCard";
import { createContext, useEffect, useState, useContext } from "react";
import { db } from "../../database/firebase.config";
import QuestionLoadingSkeleton from "./QuestionLoadingSkeleton";

const PostsContainer = () => {
  const [questionArray, setQuestionArray] = useState([]);
  useEffect(() => {
    db.collection("Questions")
      .orderBy("createdAt", "desc")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach(async (doc) => {
          console.log(doc.id);
          const oneDoc = await doc.data();
          const docId = await doc.id;
          console.log(oneDoc, docId);
          await setQuestionArray((questionArray) =>
            questionArray.concat({ oneDoc, docId })
          );
        });
      });
  }, []);

  return (
    questionArray.length > 0
      ? <section className="overflow-y-auto px-2 w-full">
        {/* <NoPosts /> */}
        
        {questionArray.map((questionDetails, index) => (
          <PostCard
            index={index}
            questionId={questionDetails.docId}
            question={questionDetails.oneDoc.question}
            answers={questionDetails.oneDoc.answers}
            questionAskedBy={questionDetails.oneDoc.questionAskedBy}
            questionCategoryList={questionDetails.oneDoc.questionCategoryList}
            likeCount={questionDetails.oneDoc.likeCount}
            likedByUsers={questionDetails.oneDoc.likedByUsers}
          />
        ))}

        {/* <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/> */}
      </section>
      : <>
        <QuestionLoadingSkeleton />
        <QuestionLoadingSkeleton />
        <QuestionLoadingSkeleton />
      </>
  );
};

export default PostsContainer;
