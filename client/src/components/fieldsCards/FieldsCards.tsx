import React from 'react'

function FieldsCards() {
  return (
    <div className="flex justify-between space-x-4  pt-2 pb-5 flex-start">
      {/* primary School Card*/}
      <a href="">
      <div className="bg-gradient-to-b from-darkBluePLusPal via-DarkBluePal to bg-blue-300 w-[250px] h-[300px] shadow-xl shadow-gray-300 rounded-md flex flex-col items-center pt-20">
        <div className='rounded-full bg-gray-100 w-[90px] h-[90px] overflow-hidden flex items-center justify-center'>
        <img
            src="./public/assets/child-student.png" 
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-white font-bold text-[30px] pt-10 flex justify-center">Primary School</p>
      </div></a>
      {/* Middle  School Card*/}
      <a href="">
      <div className="bg-gradient-to-b from-lightBluePal to bg-blue-200 w-[250px] h-[300px] shadow-lg rounded-md flex flex-col items-center pt-20">
        <div className='rounded-full bg-gray-100 w-[90px] h-[90px] overflow-hidden flex items-center justify-center '>
        <img
            src="./public/assets/middle school.png" 
            alt="Avatar"
            className="w-16 h-16 object-cover"
          />
        </div>
        <p className="text-white font-bold text-[30px] pt-10 flex justify-center">Middle School</p>
      </div></a>
      {/* high School Card */}
      <a href="">
      <div className="bg-gradient-to-b from-bluePal via-bluePal to bg-blue-200 w-[250px] h-[300px] shadow-lg rounded-md flex flex-col items-center pt-20">
        <div className='rounded-full bg-gray-100 w-[90px] h-[90px] overflow-hidden flex items-center justify-center '>
        <img
            src="./public/assets/student.png" 
            alt="Avatar"
            className="w-16 h-16 object-cover"
          />
        </div>
        <p className="text-white font-bold text-[30px] pt-10 flex justify-center">High School</p>
      </div></a>
      {/* University*/}
      <a href="">
      <div className="bg-gradient-to-b from-yelloPal  via-lightYelloPal to bg-orange-200 w-[250px] h-[300px] shadow-lg rounded-md flex flex-col items-center pt-20">
        <div className='rounded-full bg-gray-100 w-[90px] h-[90px] overflow-hidden flex items-center justify-center '>
        <img
            src="./public/assets/university.png" 
            alt="Avatar"
            className="w-16 h-16 object-cover"
          />
        </div>
        <p className="text-white font-bold text-[30px] pt-10 flex justify-center">University</p>
      </div></a>
    </div>
  )
}

export default FieldsCards