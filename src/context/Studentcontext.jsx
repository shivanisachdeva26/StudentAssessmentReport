import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchStudents, fetchStudentReport } from '../api/mockApi';

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingReport, setLoadingReport] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadStudents = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchStudents();
        setStudents(data);
      } catch (err) {
        setError(err.message || 'Failed to load students');
      } finally {
        setLoading(false);
      }
    };
    loadStudents();
  }, []);

  useEffect(() => {
    const loadReport = async () => {
      if (!selectedStudent) {
        setReport(null);
        return;
      }

      setLoadingReport(true);
      setError(null);
      try {
        const data = await fetchStudentReport(selectedStudent.id);
        setReport(data);
      } catch (err) {
        setError(err.message || 'Failed to load student report');
      } finally {
        setLoadingReport(false);
      }
    };
    loadReport();
  }, [selectedStudent]);

  return (
    <StudentContext.Provider
      value={{
        students,
        selectedStudent,
        report,
        loading,
        loadingReport,
        error,
        setSelectedStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentContext = () => useContext(StudentContext);