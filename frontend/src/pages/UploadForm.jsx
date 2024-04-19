import React, { useState } from "react";
import axios from "axios";

const UploadForm = () => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [file, setFile] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("text", text);
    formData.append("author", author);
    formData.append("file", file);

    try {
      await axios.post("http://localhost:3001/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Post uploaded successfully");
      // Reset form fields
      setText("");
      setAuthor("");
      setFile(null);
    } catch (error) {
      console.error("Error uploading post: ", error);
    }
  };

  return (
    <div>
      <h2>Upload Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">Text:</label>
          <textarea id="text" value={text} onChange={handleTextChange} />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={handleAuthorChange}
          />
        </div>
        <div>
          <label htmlFor="file">File:</label>
          <input type="file" id="file" onChange={handleFileChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadForm;
