import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UploadForm from "./pages/UploadForm";
import FileList from "./pages/FileList";
import Check from "./pages/Check";
import Navigation from "./components/Navigation";
//import FooterBar from "./components/FooterBar";

import "./app.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<UploadForm />} />
        <Route path="/files" element={<FileList />} />
        <Route path="/check" element={<Check />} />
        <Route path="*" element={<h1>Page dont Found</h1>} />
      </Routes>
      {/* <FooterBar /> */}
    </Router>
  );
}

export default App;
