import "./App.css";
import Report from "../components/Report/report";
import Visual from "../components/Visual/visual";
import Header from "../components/Header/header";
import Dashboard from "../components/Dashboard/dashboard";
function DashboardMain() {
  return (
    <>
      <Header></Header>
      <div style={{ display: "flex" }}>
        <div>
          <Dashboard></Dashboard>
        </div>
        <div>
          <Visual></Visual>
          <Report></Report>
        </div>
      </div>
    </>
  );
}

export default DashboardMain;
