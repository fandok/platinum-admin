import ReactDOM from "react-dom/client";
import DashboardMain from "./pages/Dashboard";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <DashboardMain></DashboardMain>
  </Provider>
);
