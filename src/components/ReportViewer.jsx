import React, { forwardRef } from "react";
import { useStudentContext } from "../context/Studentcontext";
import CareerPathway from "./CareerPathWay";
import imgagelogo from "../../public/abc.jpeg";
import Logo from "./Logo";
const ReportViewer = forwardRef((props, ref) => {
  const { report, loadingReport, error } = useStudentContext();

  if (loadingReport) return <div className="loading-spinner">Loading...</div>;
  if (error) return <div className="error-message">Error loading report</div>;
  if (!report) return <div className="no-report">No report selected</div>;

  // Header component to be reused on all pages except cover
  const PageHeader = () => (
    <div
      style={{
        position: "absolute",
        top: "10mm",
        left: "20mm",
        right: "20mm",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #e2e8f0",
        paddingBottom: "5mm",
      }}
    >
      <Logo />
      <div
        style={{
          fontSize: "10px",
          color: "#718096",
          textAlign: "right",
        }}
      ></div>
    </div>
  );

  return (
    <div
      ref={ref}
      className="pdf-container"
      style={{
        width: "210mm",
        minHeight: "297mm",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* Cover Page (Page 1) */}
      <div
        className="page"
        style={{
          height: "297mm",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
          padding: "20mm",
          boxSizing: "border-box",
          pageBreakAfter: "always",
        }}
      >
        <PageHeader />
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "800",
            color: "#2d3748",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          PRD ROBOTECH
        </h1>

        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#2d3748",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          CAREER COMPASS MAP
        </h2>

        <div
          style={{
            width: "60px",
            height: "2px",
            backgroundColor: "#2b6cb0",
            margin: "10px auto",
          }}
        ></div>

        <h3
          style={{
            fontSize: "20px",
            color: "#4a5568",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          OF
        </h3>

        <h4
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#2d3748",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          {report.name}
        </h4>
      </div>
      {/* Introduction Page (Page 2)  */}
      <div
        className="page"
        style={{
          height: "297mm",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
          padding: "20mm",
          boxSizing: "border-box",
          textAlign: "center",
          position: "relative",
        }}
      >
        <PageHeader />

        <div style={{ textAlign: "center", marginTop: "15mm" }}>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#4a5568",
              marginBottom: "60px",
            }}
          >
            Just as a compass points to the True North,
            <br />
            we aim to provide clarity and direction for your
            <br />
            professional voyage. Let's embark on this
            <br />
            colorful and vibrant expedition together, where
            <br />
            your values, interests, and personality traits
            <br />
            serve as the guiding stars to chart your course.
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "20mm",
            fontSize: "10px",
            color: "#718096",
            textAlign: "center",
            width: "calc(100% - 40mm)",
          }}
        >
          <p>02</p>
        </div>
      </div>
    

      {/* Career Potential Page (Page 3) */}
      <div
        className="page"
        style={{
          height: "297mm",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
          padding: "20mm",
          boxSizing: "border-box",
          textAlign: "center",
          position: "relative",
        }}
      >
        <PageHeader />

        <h2
          style={{
            fontSize: "28px",
            fontWeight: "800",
            color: "#2d3748",
            marginBottom: "20px",
            marginTop: "17mm",
          }}
        >
          {report.name}'s Career Potential
        </h2>

        {/* Rest of your page content... */}
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#4a5568",
            marginBottom: "20px",
            fontWeight: "600",
          }}
        >
          Welcome to your personalized career profile, {report.name}. At PRD
          Robotech, we believe that understanding your unique values, interests,
          and personality traits is the key to navigating your career journey
          successfully. This report is designed to provide you with insights
          into your core strengths and guide you toward fulfilling career
          opportunities. Let's embark on this colorful journey together with PRD
          Robotech!
        </p>

        <div
          style={{
            borderTop: "1px solid #e2e8f0",
            paddingTop: "20px",
            marginTop: "30px",
          }}
        >
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "800",
              color: "#2d3748",
              marginBottom: "20px",
            }}
          >
            Your Guiding Stars
          </h3>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "20mm",
            fontSize: "10px",
            color: "#718096",
            textAlign: "center",
            width: "calc(100% - 40mm)",
          }}
        >
          <p>03</p>
        </div>
      </div>
     
      
      {/* Career Pathways Pages  */}
      {report.top_career_roles.map((role, index) => (
        <div
          key={index}
          className="page"
          style={{
            height: "297mm",
            display: "flex",
            flexDirection: "column",
            // justifyContent: 'center',
            alignItems: "center",
            backgroundColor: "#ffffff",
            padding: "20mm",
            boxSizing: "border-box",
            pageBreakAfter: "always",
            textAlign: "center",
            marginTop: "8mm",
            position: "relative",
          }}
        >
          <PageHeader />
          <CareerPathway role={role} index={index} report={report} />

          <div
            style={{
              position: "absolute",
              bottom: "20mm",
              fontSize: "10px",
              color: "#718096",
              textAlign: "center",
              width: "calc(100% - 40mm)",
            }}
          >
            <p>0{index + 4}</p>
          </div>
        </div>
      ))}

      {/* Closing Page (Page 7) */}
      <div
        className="page"
        style={{
          height: "297mm",
          display: "flex",
          flexDirection: "column",
          // justifyContent: 'center',
          alignItems: "center",
          backgroundColor: "#ffffff",
          padding: "20mm",
          boxSizing: "border-box",
          pageBreakAfter: "always",
          textAlign: "center",
          marginTop: "8mm",
          position: "relative",
        }}
      >
        <PageHeader />
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "800",
            color: "#2d3748",
            marginBottom: "30px",
            marginTop: "25mm",
          }}
        >
          Your Pathway to Progress!
        </h2>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#4a5568",
            marginBottom: "40px",
            fontWeight: "600",
          }}
        >
          Welcome to your personalized career profile, {report.name}. At PRD
          Robotech, we believe that understanding your unique values, interests,
          and personality traits is the key to navigating your career journey
          successfully. This report is designed to provide you with insights
          into your core strengths and guide you toward fulfilling career
          opportunities. Let's embark on this colorful journey together with PRD
          Robotech!
        </p>

        <div
          style={{
            position: "absolute",
            bottom: "20mm",
            right: "20mm",
            fontSize: "14px",
            color: "#718096",
          }}
        >
          05
        </div>
      </div>

      {/* Contact Page (Page 8) */}
      <div
        className="page"
        style={{
          height: "297mm",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
          padding: "20mm",
          boxSizing: "border-box",
          textAlign: "center",
          position: "relative",
        }}
      >
        <PageHeader />
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "800",
            color: "#2d3748",
            marginBottom: "30px",
          }}
        >
          WHAT'S NEXT?
        </h2>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#4a5568",
            marginBottom: "40px",
          }}
        >
          Ready to take the next step? Connect with our career coaches today for
          further handholding support and growth. Let's PRD Robotech together
          and make your career aspirations a reality!
        </p>

        <div
          style={{
            backgroundColor: "#f7fafc",
            borderRadius: "8px",
            padding: "20px",
            maxWidth: "400px",
            marginBottom: "40px",
            textAlign: "left",
          }}
        >
          <p style={{ marginBottom: "10px" }}>
            Connect with us: prdrobotechsolutions@gmail.com
          </p>
          <p style={{ marginBottom: "10px" }}>Call us at: +91 8130527788</p>
          <p style={{ marginBottom: "10px" }}>
            Visit our website at: www.prdrobotechsolutions.com
          </p>
          <p>
            Follow our socials at: instagram.com/prd linkedin.com/prd
            facebook.com/prd
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "20mm",
            right: "20mm",
            fontSize: "14px",
            color: "#718096",
          }}
        >
          06
        </div>
      </div>
    </div>
  );
});

export default ReportViewer;
