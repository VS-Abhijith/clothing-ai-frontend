import { useEffect, useState } from "react";
import { apiGet } from "./api/api";

export default function App() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    apiGet("/")
      .then(data => setStatus(JSON.stringify(data)))
      .catch(() => setStatus("Error connecting to backend"));
  }, []);

  return (
    <div className="p-6 text-xl">
      <h1 className="font-bold text-3xl mb-4">Clothing AI App</h1>
      <p>Backend Response:</p>
      <div className="mt-4 p-4 bg-gray-100 rounded">{status}</div>
    </div>
  );
}
