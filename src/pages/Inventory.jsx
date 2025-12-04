import { useEffect, useState } from "react";
import { apiGet } from "../api/api";

export default function Inventory() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    apiGet("/inventory/products").then(setProducts);
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Inventory</h1>

      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">ID</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Category</th>
            <th className="p-2 text-left">Cost</th>
            <th className="p-2 text-left">Sale</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id} className="border-b">
              <td className="p-2">{p.id}</td>
              <td className="p-2">{p.name}</td>
              <td className="p-2">{p.category}</td>
              <td className="p-2">{p.default_cost_price}</td>
              <td className="p-2">{p.default_sale_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
