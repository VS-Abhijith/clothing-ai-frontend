import { useState } from "react";
import { apiPost } from "../api/api";

export default function AIChat() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);

  function sendMessage() {
    apiPost("/ai/parse", { text: input }).then(setResponse);
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">AI Chat</h1>

      <input
        className="border p-3 w-full mb-4"
        placeholder="Type something like: 3 black M size printed tees for Arjun"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={sendMessage}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Send to AI
      </button>

      {response && (
        <pre className="mt-4 p-4 bg-black text-green-300 rounded">
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
}
