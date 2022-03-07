import React from 'react'
import { UserFnameContext } from '../../pages/QuestionsPage'

const Welcome = () => {
  return (
    <UserFnameContext.Consumer>

      {
        ({ userFname }) => (
          <div className="hidden lg:flex p-3 min-h-screen md:w-1/2 bg-gray-800 items-center justify-center" >
            <div className="">
              <h1 className='text-center text-4xl font-semibold font-serif text-white mb-3'>Welcome{userFname!=="" ? `, ${userFname}`: ''}</h1>
              <h1 className='text-center text-4xl font-semibold font-serif text-white'>to DreamShelter</h1>
              <img src="/images/welcome.svg" alt="" className='mt-10 w-80 h-auto ' />
            </div>
          </div>
        )
      }

    </UserFnameContext.Consumer>
  )
}

export default Welcome