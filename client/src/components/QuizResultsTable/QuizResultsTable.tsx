import React, { useState } from "react";

interface Student {
  id: number;
  name: string;
  score: number;
  attempts: number;
  finishingTime: string;
  avatarUrl: string;
}

interface QuizResultsTableProps {
  students: Student[];
}

const QuizResultsTable: React.FC<QuizResultsTableProps> = ({ students }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState<keyof Student>("name"); // Default to "name"
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (key: keyof Student) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const sortedStudents = students.slice().sort((a, b) => {
    const valueA = a[sortKey];
    const valueB = b[sortKey];

    if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
    if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const filteredStudents = sortedStudents.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white  rounded shadow">
      <div className="flex space-x-3 justify-between items-center p-4 mb-4">
        <input
          type="text"
          placeholder="Search student"
          value={searchQuery}
          onChange={handleSearchChange}
          className="border text-sm flex-1 p-2 rounded "
        />

        <select
          value={sortKey}
          onChange={(e) => handleSortChange(e.target.value as keyof Student)}
          className="border flex-1 p-2 text-sm bg-white text-gray-600  rounded"
        >
          <option value="name">Name</option>
          <option value="score">Score</option>
          <option value="attempts">Attempts</option>
          <option value="finishingTime">Finishing Time</option>
        </select>
      </div>
      <hr />
      <div className="overflow-x-auto">
        <table className="my-4 min-w-full bg-slate-100 ">
          <thead className="border-b">
            <tr>
              <th className="text-left py-2 lg:px-4 px-16">Name</th>
              <th className="text-left py-2 px-4">Score</th>
              <th className="text-left py-2 px-4">Attempts</th>
              <th className="text-left py-2 px-4">Finishing Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr className="border-b text-sm" key={student.id}>
                <td className=" flex py-2 px-4">
                  {" "}
                  <img
                    src={student.avatarUrl}
                    alt={`${student.name} Avatar`}
                    className="h-10 w-10 rounded-full ml-0 mb-2"
                  />
                  <span className="-ml-8 text-sm font-medium text-black">
                    {student.name}
                  </span>
                </td>

                <td className="py-2 px-4 text-gray-500">{student.score}</td>
                <td className="py-2 px-4 text-gray-500">{student.attempts}</td>
                <td className="py-2 px-4 text-gray-500">
                  {student.finishingTime}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuizResultsTable;
