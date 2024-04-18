import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [filePath, setFilePath] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:3001/upload', formData);
      setFilePath(response.data.path);
    } catch (error) {
      console.error('Error uploading file: ', error);
    }
  };

  return (
    <div>
      <h1>File Upload</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {filePath && (
        <div>
          <h2>Uploaded File</h2>
          <img src={`http://localhost:3001/${filePath}`} alt="Uploaded File" />
        </div>
      )}
    </div>
  );
}

export default App;
