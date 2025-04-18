import React, { forwardRef } from "react";
import { useStudentContext } from "../context/Studentcontext";
import CareerPathway from "./CareerPathWay";
import { FileText, User, Book, Award } from "lucide-react";

const ReportViewer = forwardRef((props, ref) => {
  const { report, loadingReport, error } = useStudentContext();

  if (loadingReport)
    return (
      <div className="flex items-center justify-center p-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
        <span className="ml-3 text-gray-700">Loading report...</span>
      </div>
    );

  if (error)
    return (
      <div className="p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
          <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Report</h3>
        <p className="text-red-500">{error}</p>
      </div>
    );

  if (!report)
    return (
      <div className="p-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
          <User className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Report Selected</h3>
        <p className="text-gray-500">Select a student to view their career assessment report</p>
      </div>
    );

  return (
    <div
      ref={ref}
      className="bg-white p-8 report-container"
      id="report-content"
    >
      <div className="text-center mb-12 report-header">
        <div className="inline-block p-4 rounded-full bg-blue-50 mb-4">
          <FileText className="h-10 w-10 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-blue-800 mb-1">PRD ROBOTECH</h1>
        <h2 className="text-xl text-blue-600 mb-1">CAREER COMPASS MAP</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-3"></div>
        <h3 className="text-lg text-blue-500">OF</h3>
        <h4 className="text-2xl font-semibold text-blue-700 mt-2 student-name">
          {report.name}
        </h4>
      </div>

      <div className="mb-12 career-potential-section">
        <div className="flex items-center mb-6">
          <User className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold text-blue-800">
            {report.name}'s Career Potential
          </h2>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="student-info">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                  <span className="text-white font-medium">A</span>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Age:</span> {report.age}
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                  <span className="text-white font-medium">G</span>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Grade:</span> {report.grade}
                </p>
              </div>
            </div>
            
            <div className="skills-section">
              <h3 className="flex items-center text-lg font-semibold text-blue-700 mb-3">
                <Award className="h-5 w-5 mr-2" /> Top Skills
              </h3>
              <ul className="grid grid-cols-1 gap-2">
                {report.skills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="career-pathways-section mb-12">
        <div className="flex items-center mb-6">
          <Book className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold text-blue-800">
            Top Career Pathways
          </h2>
        </div>
        
        <div className="space-y-6">
          {report.top_career_roles.map((role, index) => (
            <CareerPathway key={index} role={role} index={index} />
          ))}
        </div>
      </div>

      <div className="summary-section mt-10 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
        <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Summary
        </h3>
        <p className="text-gray-700 leading-relaxed">{report.summary}</p>
      </div>
    </div>
  );
});

export default ReportViewer;