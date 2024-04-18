import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetFiles() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://localhost:3001/files');
        setFiles(response.data);
      } catch (error) {
        console.error('Error fetching files: ', error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <h1>Uploaded Files</h1>
      {files.map((file) => (
        <div key={file._id}>
          <img src={`http://localhost:3001/${file.path}`} alt="Uploaded File" />
        </div>
      ))}
    </div>
  );
}

export default GetFiles;
