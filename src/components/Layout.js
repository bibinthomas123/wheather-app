import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Sidebar />
      <div style={{ flex: "1", padding: "1rem" }}>
        {" "}
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
