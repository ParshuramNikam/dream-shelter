import React from 'react'
import Question from '../components/slider-questions/AllQuestion'
import Welcome from '../components/slider-questions/Welcome'

// Page to ask some queston to uer after succesfull signup :-

const QuestionsPage = () => {
  return (
    <section className="flex">
      <Welcome />
      <Question />
    </section>
  )
}

export default QuestionsPage