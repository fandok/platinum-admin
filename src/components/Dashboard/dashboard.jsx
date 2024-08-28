import "./dashboard.css";

// eslint-disable-next-line react/prop-types
function Dashboard({ dashboard, car }) {
  return (
    <div className="dashboard">
      {dashboard && (
        <>
          <div className="dashboard-top">Dashboard</div>
          <div className="dashboard-bot">Dashboard</div>
        </>
      )}
      {car && (
        <>
          <div className="dashboard-top">Cars</div>
          <div className="dashboard-bot">List Car</div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
