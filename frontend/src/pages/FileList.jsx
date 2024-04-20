import React, { useEffect, useState } from "react";
import api from "../api";
import { Grid, Row, Col, Panel } from "rsuite";

import ModalDisplay from "../components/ModalDisplay";
const URI = `http://${import.meta.env.VITE_HOST}:${import.meta.env.VITE_PORT}`;

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await api.get("/files");
        setFiles(response.data);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFiles();
    const intervalId = setInterval(fetchFiles, 10000); // time to fetch

    // Clean up function
    return () => clearInterval(intervalId);
  }, []);

  const renderFile = (file) => {
    const commonStyle = { maxWidth: "150px", borderRadius: "5px" };

    if (file.contentType.startsWith("image")) {
      return (
        <img
          src={`${URI}/uploads/${file.filename}`}
          alt="Uploaded file"
          style={commonStyle}
        />
      );
    } else if (file.contentType.startsWith("video")) {
      return (
        <video controls style={commonStyle}>
          <source
            src={`${URI}/uploads/${file.filename}`}
            type={file.contentType}
          />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return <p>Unsupported file format</p>;
    }
  };

  return (
    <div>
      <h2>Recuerdos de More</h2>
      <Grid fluid>
        <Row>
          {files.map((file) => (
            <Col key={file._id}>
              {/* <strong>Author:</strong> {file.author}
              <br />
              <strong>Text:</strong> {file.text}
              <br />
              <strong>Filename:</strong> {file.filename}
              <br />
              <strong>Content Type:</strong> {file.contentType}
              <br /> */}
              <div>{renderFile(file)}</div>
              <ModalDisplay
                text={file.text}
                img={`${URI}/uploads/${file.filename}`}
                author={file.author}
                type={
                  file.filename.split(".").pop() === "mp4" ? "video" : "photo"
                }
              />
            </Col>
          ))}
        </Row>
      </Grid>
    </div>
  );
};

export default FileList;

//             <img src={`http://localhost:5000/uploads/${file.filename}`} alt="Uploaded file" style={{ maxWidth: '100px' }} />
