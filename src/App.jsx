import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { StudentProvider } from "./context/Studentcontext";
import Header from "./components/Header";
const App = () => {
  return (
    <>
      <Router>
        <StudentProvider>
        <Header />
          <Home />
        </StudentProvider>
      </Router>
    </>
  );
};

export default App;
