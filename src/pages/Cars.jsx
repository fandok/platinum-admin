import Header from "../components/Header/header";
import Dashboard from "../components/Dashboard/dashboard";
import CarList from "../components/CarList/carlist";

function Cars() {
  return (
    <>
      <Header></Header>
      <div style={{ display: "flex" }}>
        <div>
          <Dashboard car></Dashboard>
        </div>
        <div>
          <CarList></CarList>
        </div>
      </div>
    </>
  );
}

export default Cars;
