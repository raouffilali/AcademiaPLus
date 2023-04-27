import React from "react";

function Categories(props:any) {
  return (
    <div className="text-md text-gray-600   mb-5 hover:p-[3px] hover:bg-lightBluePal hover:rounded-md hover:text-white hover:cursor-pointer">
      <a href="/">{props.cName}</a>{" "}
    </div>
  );
}

export default Categories;
