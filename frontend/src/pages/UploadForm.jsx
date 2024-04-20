import React, { useState } from "react";
import axios from "axios";
import { Notification, Input, InputGroup, MaskedInput, Button } from "rsuite";

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

    try {
      await axios.post("http://localhost:5000/upload", formData, {
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
      <h2>Comparti tu recuerdo 🤗</h2>

      <form onSubmit={handleSubmit}>
        <Input
          as="input"
          type="text"
          placeholder="Nombre"
          value={author}
          onChange={(value) => setAuthor(value)}
        />

        <Input
          as="textarea"
          type="text"
          placeholder="Mensaje"
          value={text}
          onChange={(value) => setText(value)}
        />

        <input type="file" onChange={handleFileChange} />

        <Button appearance="primary" type="submit">
          Subir
        </Button>
      </form>

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
    </div>
  );
};

export default UploadForm;
