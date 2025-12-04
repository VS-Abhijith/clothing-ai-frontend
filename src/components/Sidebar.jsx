import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-60 bg-gray-800 text-white h-screen p-5 fixed">
      <h2 className="text-xl font-bold mb-8">Clothing App</h2>

      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
        <Link to="/inventory" className="hover:bg-gray-700 p-2 rounded">Inventory</Link>
        <Link to="/sales" className="hover:bg-gray-700 p-2 rounded">Sales</Link>
        <Link to="/ai" className="hover:bg-gray-700 p-2 rounded">AI Chat</Link>
      </nav>
    </div>
  );
}
