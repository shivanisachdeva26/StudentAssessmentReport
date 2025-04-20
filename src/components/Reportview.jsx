
import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useStudentContext } from "../context/Studentcontext";
import ReportViewer from "./ReportViewer";
import EmailSimulator from "./EmailSimulator";
import { Download } from "lucide-react";
import { Loader } from "lucide-react";

const ReportWithDownload = () => {
  const reportRef = useRef(null);
  const { report, loadingReport } = useStudentContext();
  const [isDownloading, setIsDownloading] = React.useState(false);

  const handleDownload = async () => {
    if (!reportRef.current || !report) return;

    setIsDownloading(true);

    try {
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const elements = reportRef.current.querySelectorAll(".page");
      const totalPages = elements.length;

      for (let i = 0; i < totalPages; i++) {
        const element = elements[i];
        const canvas = await html2canvas(element, {
          scale: 3, // Higher scale for better quality
          useCORS: true,
          logging: false,
          scrollY: -window.scrollY,
          windowWidth: element.scrollWidth,
          windowHeight: element.scrollHeight,
        });

        const imgData = canvas.toDataURL("image/png", 1.0);

        if (i > 0) pdf.addPage();

        // Calculate dimensions to maintain aspect ratio
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      }

      pdf.save(`${report.name}-career-report.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div>
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
              <span>
                {isDownloading ? "Generating PDF..." : "Download PDF Report"}
              </span>
            </button>

            <EmailSimulator />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportWithDownload;
