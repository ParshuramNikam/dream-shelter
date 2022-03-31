import NoPosts from "../UserProfile/NoPosts";
import PostCard from "./PostCard";
import { createContext, useEffect, useState, useContext } from "react";
import { db } from "../../database/firebase.config";
import QuestionLoadingSkeleton from "./QuestionLoadingSkeleton";

const PostsContainer = ({
  userDetails,
  isProfilePage,
  refreshPost,
  setRefreshPost,
}) => {
  const [questionIds, setQuestionIds] = useState([]);
  const [questionArray, setQuestionArray] = useState([]);
  useEffect(() => {
    if (isProfilePage) {
      db.collection("questions")
        .doc("cIvPTU5LDcmCAQsq4nJO")
        .get()
        .then(async (snapshot) => {
          console.log(snapshot.data());
          await setQuestionIds(Object.keys(snapshot.data()));
          await Object.keys(snapshot.data()).forEach((id) => {
            if (
              snapshot.data()[id].questionAskedBy ===
              localStorage.getItem("ds-user-uid")
            ) {
              setQuestionArray((prevQuestionArray) => [
                ...prevQuestionArray,
                { questionId: id, questionDetails: snapshot.data()[id] },
              ]);
            }
          });
        });
    } else {
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
        })
        .then(async() => {
        //   setQuestionArray(
        //     questionArray.sort((a, b) => {
        //       return a.likeCount - b.likeCount;
        //     })
        //   );
        const newArray = await questionArray.sort((a, b) => { 
          return a.questionDetails.likeCount + b.questionDetails.likeCount;
        });
        console.log(newArray);
        // await setQuestionArray(await questionArray.sort((a, b) => { 
        //   return a.questionDetails.likeCount + b.questionDetails.likeCount;
        // }))
        })
        .catch(e=>{
          console.log(e); 
        })
    }
  }, [refreshPost]);

  return questionArray.length > 0 ? (
    <section className="overflow-y-auto px-2 w-full">
      {/* <NoPosts /> */}

      {questionArray.map((question, index) => (
        <PostCard
          index={index}
          userDetails={userDetails}
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
