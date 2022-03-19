import NoPosts from "../UserProfile/NoPosts";
import PostCard from "./PostCard";
import { createContext, useEffect, useState, useContext } from "react";
import { db } from "../../database/firebase.config";

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
    <section className="overflow-y-auto px-2">
      {/* <NoPosts /> */}

      {questionArray.map((questionDetails, index) => (
        <PostCard
          index={index}
          questionId={questionDetails.docId}
          question={questionDetails.oneDoc.question}
          answers={questionDetails.oneDoc.answers}
          questionAskedBy={questionDetails.oneDoc.questionAskedBy}
          questionCategoryList={questionDetails.oneDoc.questionCategoryList}
        />
      ))}

      {/* <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/> */}
    </section>
  );
};

export default PostsContainer;
