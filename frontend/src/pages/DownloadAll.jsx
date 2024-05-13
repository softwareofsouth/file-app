import React from "react";
import api from "../api";

const DownloadAll = () => {
  const downloadAll = async () => {
    try {
      const response = await api.get("download/all", { responseType: "blob" });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "images.zip");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };

  return (
    <div>
      <button onClick={downloadAll}>Download All</button>
    </div>
  );
};

export default DownloadAll;
