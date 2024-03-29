import React from "react";

function SectionTitle(props: any) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold mr-4 text-[#062835]">
      {props.genreTitle} {props.typeText} Course{" "}
      </h1>
      <button className="bg-white border-2  hover:border-black text-black font-bold py-2 px-4 rounded">
        View All
      </button>
    </div>
  );
}

export default SectionTitle;
