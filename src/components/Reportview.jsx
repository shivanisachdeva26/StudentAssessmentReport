


// import { useRef, forwardRef } from "react";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import { useStudentContext } from "../context/Studentcontext";
// import EmailSimulator from "./EmailSimulator"; // Assuming this component exists

// // 1. Import the desired icon from react-icons
// import { HiDownload } from "react-icons/hi"; // Using Heroicons Download icon

// // ReportViewer component remains the same as the previous version...
// const ReportViewer = forwardRef((props, ref) => {
//   const { report, loadingReport, error } = useStudentContext();

//   if (loadingReport)
//     return <div className="p-6 text-center text-gray-600 animate-pulse">Loading report...</div>;
//   if (error)
//     return <div className="p-6 text-center text-red-700 bg-red-100 rounded-lg">Error loading report: {error}</div>;
//   if (!report)
//     return (
//       <div className="p-10 text-center text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
//         <p className="text-lg font-medium">Select a student from the dropdown above to view their Career Compass Map.</p>
//       </div>
//     );

//   return (
//     <div
//       ref={ref}
//       className="bg-white rounded-lg"
//       id="report-content"
//     >
//       {/* Report Header */}
//       <div className="text-center p-6 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-t-lg text-white">
//         <h1 className="text-4xl font-bold tracking-tight">PRD ROBOTECH</h1>
//         <h2 className="text-2xl opacity-90 mt-1">CAREER COMPASS MAP</h2>
//         <h3 className="text-lg opacity-80 mt-2">OF</h3>
//         <h4 className="text-3xl font-semibold mt-2">{report.name}</h4>
//       </div>

//       {/* Main Content Padding */}
//       <div className="p-6 md:p-8 space-y-8">

//         {/* Career Potential Section */}
//         <div className="border-t border-gray-200 pt-8">
//           <h2 className="text-2xl font-bold text-gray-800 mb-5">
//             {report.name}'s Career Potential
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
//             <div className="space-y-2 bg-gray-50 p-4 rounded-md">
//               <p><span className="font-semibold text-gray-900">Age:</span> {report.age}</p>
//               <p><span className="font-semibold text-gray-900">Grade:</span> {report.grade}</p>
//             </div>
//             <div className="space-y-2 bg-gray-50 p-4 rounded-md">
//               <p className="font-semibold text-gray-900 mb-1">Top Skills:</p>
//               <ul className="list-disc list-inside space-y-1 pl-2">
//                 {report.skills.map((skill, index) => (
//                   <li key={index}>{skill}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Top Career Pathways Section */}
//         <div className="border-t border-gray-200 pt-8">
//           <h2 className="text-2xl font-bold text-gray-800 mb-5">
//             Top Career Pathways
//           </h2>
//           <div className="space-y-6">
//             {report.top_career_roles.map((role, index) => (
//               <div
//                 key={index}
//                 className="p-6 border border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
//               >
//                 <h3 className="text-xl font-semibold text-indigo-800 mb-3">
//                   {index + 1}. {role.role}
//                 </h3>
//                 <div className="space-y-4 text-gray-700">
//                    {/* Sub-headings and content */}
//                    <div>
//                     <h4 className="font-semibold text-indigo-700 mb-1">Why It Matches Your Profile</h4>
//                     <p className="text-sm">{role.why_it_matches_profile}</p>
//                   </div>
//                    <div>
//                     <h4 className="font-semibold text-indigo-700 mb-1">Potential Job Roles & Growth</h4>
//                     <ul className="list-disc list-inside space-y-1 pl-4 text-sm">
//                       {role.potential_job_roles_and_growth_opportunities.map( (job, i) => <li key={i}>{job}</li> )}
//                     </ul>
//                   </div>
//                    <div>
//                     <h4 className="font-semibold text-indigo-700 mb-1">Educational Pathways & Skills</h4>
//                     <p className="text-sm">{role.educational_pathways_and_skill_development}</p>
//                    </div>
//                    <div>
//                      <h4 className="font-semibold text-indigo-700 mb-1">Mindset Development</h4>
//                      <p className="text-sm">{role.mindset_and_attitude_development}</p>
//                    </div>
//                    <div>
//                     <h4 className="font-semibold text-indigo-700 mb-1">Career Outlook</h4>
//                     <p className="text-sm">{role.career_trends_and_future_outlook}</p>
//                    </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Summary Section */}
//         <div className="border-t border-gray-200 pt-8">
//            <h3 className="text-2xl font-bold text-gray-800 mb-4">Summary</h3>
//            <div className="p-5 bg-gray-50 rounded-lg text-gray-700">
//              <p>{report.summary}</p>
//            </div>
//         </div>
//       </div>
//     </div>
//   );
// });

// ReportViewer.displayName = 'ReportViewer';


// const ReportWithDownload = () => {
//   const reportRef = useRef(null);
//   const { report, loadingReport } = useStudentContext();

//   const handleDownload = async () => {
//     // PDF generation logic remains the same...
//     if (!reportRef.current || !report) return;

//     const reportElement = reportRef.current;
//     const originalShadow = reportElement.style.boxShadow;
//     reportElement.style.boxShadow = 'none';

//     const canvas = await html2canvas(reportElement, {
//       scale: 2,
//       useCORS: true,
//       logging: false,
//       windowHeight: reportElement.scrollHeight,
//       scrollY: -window.scrollY
//     });

//     reportElement.style.boxShadow = originalShadow;

//     const imgData = canvas.toDataURL("image/png", 1.0);
//     const pdf = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });

//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = pdf.internal.pageSize.getHeight();
//     const canvasWidth = canvas.width;
//     const canvasHeight = canvas.height;
//     const ratio = canvasHeight / canvasWidth;
//     let imgHeight = pdfWidth * ratio;
//     let heightLeft = imgHeight;
//     let position = 0;

//     pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
//     heightLeft -= pdfHeight;

//     while (heightLeft > 0) {
//       position = heightLeft - imgHeight;
//       pdf.addPage();
//       pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
//       heightLeft -= pdfHeight;
//     }

//     pdf.save(`${report.name}-career-report.pdf`);
//   };

//   return (
//     <div>
//       <ReportViewer ref={reportRef} />

//       {report && !loadingReport && (
//         <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
//           <button
//             onClick={handleDownload}
//             className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
//           >
//             {/* 2. Use the imported icon component here */}
//             {/* Apply size and margin classes directly */}
//             <HiDownload className="h-5 w-5 mr-2" aria-hidden="true" />
//             Download PDF Report
//           </button>
//           <EmailSimulator />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReportWithDownload;


import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useStudentContext } from "../context/Studentcontext";
import EmailSimulator from "./EmailSimulator";
import { Download, Mail, Loader } from "lucide-react";
import ReportViewer from "./ReportViewer"; 

const ReportWithDownload = () => {
  const reportRef = useRef(null);
  const { report, loadingReport } = useStudentContext();
  const [isDownloading, setIsDownloading] = React.useState(false);

  const handleDownload = async () => {
    if (!reportRef.current || !report) return;
    
    setIsDownloading(true);
    
    try {
      const canvas = await html2canvas(reportRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        allowTaint: true,
      });
  
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${report.name}-career-report.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      <ReportViewer ref={reportRef} />

      {report && !loadingReport && (
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isDownloading ? (
                <Loader className="h-5 w-5 animate-spin" />
              ) : (
                <Download className="h-5 w-5" />
              )}
              <span>{isDownloading ? "Generating PDF..." : "Download PDF Report"}</span>
            </button>
            
            <EmailSimulator />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportWithDownload;