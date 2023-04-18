function PersonalinfoSec(obj: { title: string; detail: any }) {
  return (
    <div className="w-full">
      <h3 className="font-bold text-lg text-darkBluePLusPal">{obj.title}</h3>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
        <h6 className="mt-2 sm:mt-0">{obj.detail}</h6>
        <button
          type="button"
          className="mt-2  sm:mt-0 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Edit
        </button>
      </div>
      <hr />
    </div>
  );
}

export default PersonalinfoSec;
