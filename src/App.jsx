import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

export default function App({ children }) {
  return (
    <div>
      <Sidebar />
      <Topbar />
      <div className="ml-60 mt-20 p-6">{children}</div>
    </div>
  );
}
