import React from 'react'

function MyQuizAttempt() {
  return (
    <div className='bg-white shadow rounded text-center text-sm space-y-4  p-4'>
      <img src="assets/quiz.jpg" className='lg:h-80 h-' alt="" />
      <p className='text-3xl text-gray-800 font-medium'>Welcome to Quiz</p>
      <p className=' text-gray-500'>Engage live or asynchronously with quiz and poll questions <br /> that participants complete at their own pace.</p>
      <button className='bg-blueLink text-white text-lg rounded font-medium py-3 px-8 shadow-md'>Start Quiz</button>
    </div>
  )
}

export default MyQuizAttempt