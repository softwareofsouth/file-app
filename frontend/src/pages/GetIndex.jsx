import React, { useState, useEffect } from "react";

const GetIndex = () => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const fetchIndex = async () => {
      try {
        const res = await fetch(
          "http://" + import.meta.env.VITE_BACKEND_URL + ":5000"
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.text();
        setResponse(data);
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    };
    fetchIndex();
  }, []);

  return <p> Here come the response {response}</p>;
};

export default GetIndex;
