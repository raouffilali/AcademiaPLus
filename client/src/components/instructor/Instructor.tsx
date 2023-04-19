import React from 'react'
interface InstructorProps {
    rating: number;
    name: string;
  job: string;
  avatarSrc: string;
  }
function Instructor( {name, job, avatarSrc,rating} :InstructorProps) {
    return (
      <div className="text-center">
        <img
          src={avatarSrc} 
          className="mx-auto mb-2 w-[120px] h-[120px] rounded-full"
          alt="Avatar"
        />
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
  