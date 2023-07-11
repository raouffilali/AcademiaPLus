import React from 'react'
import { Link } from 'react-router-dom'

function FieldsCards() {
  return (
    <div className="flex mt-10 flex-start ">
      <Link to="/PrimarySchool">
      {/* primary School Card*/}
      <div className=" hover:bg-gradient-to-b  hover:from-blue-300 to hover:bg-blue-100 text-redPal hover:text-white w-[210px] h-[280px] shadow-sm shadow-gray-400 rounded-md  space-y-4 pt-12  transition-all duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-lg">
        <div className='rounded-full bg-gray-200 w-[90px] h-[90px] overflow-hidden '>
        <img
            src="/assets/child-student.png" 
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-center font-bold text-[20px] ">Primary  School</p>
        <p className='text-center text-gray-500  text-sm'>Lorem ipsum dolor sit, amet consectetur.</p>
      </div></Link>
      {/* Middle  School Card*/}
      <Link to="/MiddleSchool">
      <div className="bg-gradient-to-b hover:from-bluePal  to hover:bg-blue-100   text-redPal hover:text-white w-[210px] h-[280px] shadow-sm shadow-gray-400 rounded-md  space-y-4 pt-12  transition-all duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-lg">
        <div className='rounded-full bg-gray-200 w-[90px] h-[90px] overflow-hidden flex items-center justify-center '>
        <img
            src="/assets/middle school.png" 
            alt="Avatar"
            className="w-16 h-16 object-cover"
          />
        </div>
        <p className="text-center font-bold text-[20px] ">Middle School</p>
        <p className='text-center text-gray-500  text-sm'>Lorem ipsum dolor sit, amet consectetur.</p>
      </div></Link>
      {/* high School Card */}
      <Link to="/HighSchool">
      <div className="bg-gradient-to-b hover:from-lightBluePal to hover:bg-blue-200 text-redPal hover:text-white w-[210px] h-[280px] shadow-sm shadow-gray-400 rounded-md  space-y-4 pt-12  transition-all duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-lg">
        <div className='rounded-full bg-gray-200 w-[90px] h-[90px] overflow-hidden flex items-center justify-center '>
        <img
            src="/assets/student.png" 
            alt="Avatar"
            className="w-16 h-16 object-cover"
          />
        </div>
        <p className="text-center font-bold text-[20px] ">High School</p>
        <p className='text-center text-gray-500  text-sm'>Lorem ipsum dolor sit, amet consectetur.</p>
      </div></Link>
      {/* University*/}
      <Link to="/University">
      <div className="bg-gradient-to-b hover:from-greenish to hover:bg-button  text-redPal hover:text-black w-[210px] h-[280px] shadow-sm shadow-gray-400 rounded-md  space-y-4 pt-12  transition-all duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-lg">
        <div className='rounded-full bg-gray-200 w-[90px] h-[90px] overflow-hidden flex items-center justify-center '>
        <img
            src="/assets/university.png" 
            alt="Avatar"
            className="w-16 h-16 object-cover"
          />
        </div>
        <p className="text-center font-bold text-[20px] ">University</p>
        <p className='text-center text-gray-500  text-sm'>Lorem ipsum dolor sit, amet consectetur.</p>
      </div></Link>
    </div>
  )
}

export default FieldsCards