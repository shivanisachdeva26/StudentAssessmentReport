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