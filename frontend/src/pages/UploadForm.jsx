import React, { useState } from "react";
import axios from "axios";
import { Notification, Input, Button, FlexboxGrid, Divider } from "rsuite";

//const URI = import.meta.env.VITE_BACKEND_URL;
const URI = "http://" + import.meta.env.VITE_BACKEND_URL + ":5000";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("author", author);
    formData.append("text", text);

    if (!file) {
      alert("Por favor selecciona un archivo 🤔");
      return;
    }

    try {
      await axios.post(`${URI}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("File uploaded successfully");
      setUploadStatus("success");
    } catch (err) {
      console.error("Error uploading file:", err);
      setUploadStatus("error");
    }
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2>Comparti tu recuerdo 🤗</h2>
      </div>
      <FlexboxGrid justify="center">
        <form onSubmit={handleSubmit}>
          <h5>Tu nombre:</h5>
          <Input
            as="input"
            type="text"
            placeholder="Nombre"
            value={author}
            onChange={(value) => setAuthor(value)}
          />
          <h5>Tu mensaje:</h5>
          <Input
            as="textarea"
            type="text"
            placeholder="Mensaje"
            value={text}
            onChange={(value) => setText(value)}
          />
          <h5>Seleciona un archivo:</h5>
          <div style={{ textAlign: "center" }}>
            <input
              type="file"
              onChange={handleFileChange}
              style={{ margin: "1rem auto" }}
            />
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <Button appearance="primary" color="green" type="submit" block>
              Subir
            </Button>
          </div>
        </form>
      </FlexboxGrid>
      {uploadStatus === "success" && (
        <Notification type="success" header="Operacion con Exito">
          Informacion enviada 😃👍
        </Notification>
      )}
      {uploadStatus === "error" && (
        <Notification type="error" header="Operacion fallida">
          Error al cargar 😐
        </Notification>
      )}
      <Divider>
        <h2>✨✨</h2>
      </Divider>
    </div>
  );
};

export default UploadForm;
