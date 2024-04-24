import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UploadForm from "./pages/UploadForm";
import FileList from "./pages/FileList";
import Navigation from "./components/Navigation";
import GetIndex from "./pages/GetIndex";

import "./app.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<GetIndex />} />
        <Route path="/files" element={<FileList />} />
        <Route path="/upload" element={<UploadForm />} />
      </Routes>
    </Router>
  );
}

export default App;
