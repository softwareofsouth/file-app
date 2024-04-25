import React, { useState } from "react";
import api from "../api";

const Check = () => {
  const [response, setResponse] = useState(null);

  const fetchData = async () => {
    try {
      const result = await api.get("/check");
      setResponse(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Check API</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default Check;
