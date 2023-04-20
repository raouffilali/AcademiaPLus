import React from 'react'
interface InstructorProps {
    rating: number;
    name: string;
  job: string;
  avatarSrc: string;
  }
function Instructor( {name, job, avatarSrc,rating} :InstructorProps) {
    return (
      
        <div className=" py-20 flex flex-col  items-center text-center">
          <div className=' w-[140px] h-[140px]'>
          <img
            src={avatarSrc} 
            className="mx-auto mb-2 w-full h-full rounded-full"
            alt="Avatar"
          />

          </div>
          <div className='flex flex-row '>
          {Array.from({ length: 5 }, (_, index) => (
              <span
                key={index}
                className={`text-yellow-500 mr-1 ${
                  index < rating ? "opacity-100" : "opacity-30"
                }`}
              >
                &#9733;
              </span>
            ))}
            </div>
          
          <span className="text-gray-500">{rating}</span>{" "}
          <h5 className="mb-1 text-lg font-medium leading-tight">{name}</h5>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">{job}</p>
          <button className='mt-2 text-sm  bg-DarkBluePal rounded-full w-16 h-6 text-white'>
              Profile
          </button>
            
        </div>
     
    );
  }
  
  export default Instructor;
  