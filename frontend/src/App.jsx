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
      <GetIndex />
      <Routes>
        <Route path="/" element={<UploadForm />} />
        <Route path="/files" element={<FileList />} />
      </Routes>
    </Router>
  );
}

export default App;
