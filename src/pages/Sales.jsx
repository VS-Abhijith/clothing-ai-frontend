import { useState } from "react";
import { apiPost } from "../api/api";

export default function Sales() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  function submitSale() {
    apiPost("/sales/create", JSON.parse(text)).then(setResult);
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Sales (Manual JSON)</h1>
      <p>Paste structured JSON here to create an invoice.</p>

      <textarea
        rows="10"
        className="w-full p-3 border"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='{
  "id": "INV-20250101-0001",
  "invoice_no": "1001",
  "customer_id": "CUST001",
  "items": [
    {"variant_id": "VAR0001", "quantity": 1, "unit_price": 399}
  ],
  "discount": 0,
  "payment_method": "cash"
}'
      ></textarea>

      <button
        onClick={submitSale}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Submit Invoice
      </button>

      {result && (
        <pre className="mt-4 bg-gray-900 text-white p-4 rounded">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
