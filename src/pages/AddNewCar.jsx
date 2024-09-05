import Header from "../components/Header/header";
import Dashboard from "../components/Dashboard/dashboard";
import AddCar from "../components/AddCar/addcar";
function AddNewCar() {
  return (
    <>
      <Header></Header>
      <div style={{ display: "flex" }}>
        <div>
          <Dashboard car></Dashboard>
        </div>
        <div>
          <AddCar></AddCar>
        </div>
      </div>
    </>
  );
}

export default AddNewCar;
