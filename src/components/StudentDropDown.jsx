import { useContext } from "react";
import { useStudentContext } from "../context/Studentcontext";
const StudentSelector = () => {
  const { students, selectedStudent, loading, error, setSelectedStudent } =
    useStudentContext();

  if (loading)
    return <div className="p-4 text-center">Loading students...</div>;
  if (error)
    return <div className="p-4 text-center text-red-500">Error: {error}</div>;

  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow">
      <label
        htmlFor="student-select"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Select a Student
      </label>
      <select
        id="student-select"
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        value={selectedStudent?.id || ""}
        onChange={(e) => {
          const student = students.find(
            (s) => s.id === parseInt(e.target.value)
          );
          setSelectedStudent(student || null);
        }}
      >
        <option value="">-- Select a student --</option>
        {students.map((student) => (
          <option key={student.id} value={student.id}>
            {student.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StudentSelector;
