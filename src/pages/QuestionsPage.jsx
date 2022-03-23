import React from 'react'
import AllQuestions from '../components/slider-questions/AllQuestion'
import AllQuestion2 from '../components/slider-questions/AllQuestion2';
import Welcome from '../components/slider-questions/Welcome'

// Page to ask some queston to uer after succesfull signup :-

export const UserFnameContext = React.createContext();

const QuestionsPage = () => {

  const [userFname, setUserFname] = React.useState("");

  return (
    <UserFnameContext.Provider value={{ userFname, setUserFname }}>

      <section className="flex">
        <Welcome />
        {/* <AllQuestions /> */}
        <AllQuestion2 />
      </section>

    </UserFnameContext.Provider>
  )
}

export default QuestionsPage