import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/files');
        setFiles(response.data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <h2>Files</h2>
      <ul>
        {files.map((file) => (
          <li key={file._id}>
            <strong>Author:</strong> {file.author}<br />
            <strong>Text:</strong> {file.text}<br />
            <strong>Filename:</strong> {file.filename}<br />
            <strong>Content Type:</strong> {file.contentType}<br />
            <img src={`http://localhost:5000/uploads/${file.filename}`} alt="Uploaded file" style={{ maxWidth: '100px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;