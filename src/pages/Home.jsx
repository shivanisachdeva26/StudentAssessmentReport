import { StudentProvider } from "../context/Studentcontext";
import StudentSelector from "../components/StudentDropDown";
import ReportWithDownload from "../components/Reportview";
const Home = () => {
  return (
    <>
      
      <StudentProvider >
        <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 mt-32">
          <div className="max-w-3/4 mx-auto">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Student Assessment Report Generator
            </h1>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <StudentSelector />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <ReportWithDownload />
            </div>
          </div>
        </div>
      </StudentProvider>
    </>
  );
};

export default Home;
