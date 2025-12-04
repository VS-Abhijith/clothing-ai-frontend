import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Sales from "./pages/Sales";
import AIChat from "./pages/AIChat";
import App from "./App";

export default function Router() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/ai" element={<AIChat />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}
