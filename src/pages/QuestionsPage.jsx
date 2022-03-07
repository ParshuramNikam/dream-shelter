import React from 'react'
import Question from '../components/slider-questions/AllQuestion'
import Welcome from '../components/slider-questions/Welcome'

// Page to ask some queston to uer after succesfull signup :-

export const UserFnameContext = React.createContext();

const QuestionsPage = () => {

  const [userFname, setUserFname] = React.useState("");

  return (
    <UserFnameContext.Provider value={ {userFname, setUserFname} }>

      <section className="flex">
        <Welcome />
        <Question />
      </section>

    </UserFnameContext.Provider>
  )
}

export default QuestionsPage