import React, { useState } from "react";
import { ChevronDown, ChevronUp, Briefcase, GraduationCap, Brain, TrendingUp } from "lucide-react";

const CareerPathway = ({ role, index }) => {
  const [isExpanded, setIsExpanded] = useState(index === 0);

  return (
    <div 
      className={`border rounded-xl overflow-hidden career-pathway-card transition-all duration-300 ${
        isExpanded ? "border-blue-300 shadow-md" : "border-gray-200"
      }`}
    >
      <div
        className={`flex items-center justify-between p-4 cursor-pointer transition-colors duration-200 ${
          isExpanded ? "bg-blue-50" : "bg-white hover:bg-gray-50"
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
            isExpanded ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"
          }`}>
            <Briefcase className="h-5 w-5" />
          </div>
          <h3 className={`text-xl font-semibold ${isExpanded ? "text-blue-700" : "text-gray-700"}`}>
            {role.role}
          </h3>
        </div>
        <div className="text-gray-500">
          {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </div>
      </div>

      {isExpanded && (
        <div className="p-5 bg-white border-t border-gray-100 pathway-details">
          <div className="grid grid-cols-1 gap-5">
            <div>
              <h4 className="font-semibold text-blue-600 mb-2 flex items-center">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                  <svg className="h-3 w-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                Why It Matches Your Profile
              </h4>
              <p className="text-gray-700 leading-relaxed pl-8">{role.why_it_matches_profile}</p>
            </div>

            <div>
              <h4 className="font-semibold text-blue-600 mb-2 flex items-center">
                <Briefcase className="h-4 w-4 mr-2" />
                Potential Job Roles
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-8">
                {role.potential_job_roles_and_growth_opportunities.map((job, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
                    {job}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-blue-600 mb-2 flex items-center">
                <GraduationCap className="h-4 w-4 mr-2" />
                Educational Pathways
              </h4>
              <p className="text-gray-700 leading-relaxed pl-8">
                {role.educational_pathways_and_skill_development}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-blue-600 mb-2 flex items-center">
                <Brain className="h-4 w-4 mr-2" />
                Mindset Development
              </h4>
              <p className="text-gray-700 leading-relaxed pl-8">{role.mindset_and_attitude_development}</p>
            </div>

            <div>
              <h4 className="font-semibold text-blue-600 mb-2 flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                Career Outlook
              </h4>
              <p className="text-gray-700 leading-relaxed pl-8">{role.career_trends_and_future_outlook}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerPathway;