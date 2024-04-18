import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PostFiles from "./pages/PostFiles";
import GetFiles from "./pages/GetFiles";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/upload" element={<PostFiles />} />
          <Route path="/" element={<GetFiles />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;