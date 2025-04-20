
import React from "react";
import { FaCompass } from "react-icons/fa";

const CareerPathway = ({ role, index, report }) => {
  return (
    <>
      <h1 className="text-3xl font-bold mt-20">
        Top Career Pathways for {report.name}
      </h1>
      <hr className="border-[1px] border-black my-2" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
      
        <FaCompass size={28} />

        <h3
          style={{
            fontSize: "24px",
            fontWeight: "700",
            color: "#2d3748",
          }}
        >
          {role.role}
        </h3>
      </div>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#4a5568",
          marginBottom: "20px",
        }}
      >
        {role.description}
      </p>

      <h4
        style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "#2d3748",
          marginBottom: "10px",
        }}
      >
        Why It Matches Your Profile
      </h4>
      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#4a5568",
          marginBottom: "20px",
        }}
      >
        {role.why_it_matches_profile}
      </p>

      <h4
        style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "#2d3748",
          marginBottom: "10px",
        }}
      >
        Potential Job Roles and Growth Opportunities
      </h4>
      <ul
        style={{
          marginBottom: "20px",
          paddingLeft: "20px",
        }}
      >
        {role.potential_job_roles_and_growth_opportunities.map((job, i) => (
          <li
            key={i}
            style={{
              marginBottom: "8px",
              fontSize: "16px",
              color: "#4a5568",
            }}
          >
            {job}
          </li>
        ))}
      </ul>

      <h4
        style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "#2d3748",
          marginBottom: "10px",
        }}
      >
        Educational Pathways and Skill Development
      </h4>
      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#4a5568",
          marginBottom: "20px",
        }}
      >
        {role.educational_pathways_and_skill_development}
      </p>

      <h4
        style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "#2d3748",
          marginBottom: "10px",
        }}
      >
        Mindset and Attitude Development
      </h4>
      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#4a5568",
          marginBottom: "20px",
        }}
      >
        {role.mindset_and_attitude_development}
      </p>

      <h4
        style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "#2d3748",
          marginBottom: "10px",
        }}
      >
        Career Trends and Future Outlook
      </h4>
      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#4a5568",
        }}
      >
        {role.career_trends_and_future_outlook}
      </p>

      {/* Divider between career pathways */}
      {index < role.length - 1 && (
        <div
          style={{
            borderTop: "1px solid #e2e8f0",
            margin: "30px 0",
            paddingTop: "20px",
          }}
        ></div>
      )}
    </>
  );
};

export default CareerPathway;
