import { useState } from "react";
import { apiGet } from "../api/api";

const TABLES = [
  "products",
  "product_variants",
  "stock_levels",
  "stock_movements",
  "sellers",
  "purchase_orders",
  "purchase_order_items",
  "customers",
  "invoices",
  "invoice_items",
  "payments",
  "bookings",
  "booking_items",
  "expenses",
  "pnl_snapshots"
];

export default function Tables() {
  const [data, setData] = useState(null);

  async function loadTable(name) {
    const res = await apiGet(`/debug/table/${name}`);
    setData(res);
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Database Tables</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {TABLES.map((t) => (
          <button
            key={t}
            onClick={() => loadTable(t)}
            className="p-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
          >
            {t}
          </button>
        ))}
      </div>

      {data && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">{data.table}</h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                {Object.keys(data.rows[0] || {}).map((col) => (
                  <th key={col} className="border p-2 bg-gray-200">{col}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data.rows.map((row, i) => (
                <tr key={i}>
                  {Object.values(row).map((v, idx) => (
                    <td key={idx} className="border p-2">{String(v)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
