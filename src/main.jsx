import ReactDOM from "react-dom/client";
import DashboardMain from "./pages/Dashboard";
import Cars from "./pages/Cars";
import AddNewCar from "./pages/AddNewCar";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/signin/signin";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/dashboard", element: <DashboardMain /> },
  { path: "/cars", element: <Cars /> },
  { path: "/addnewcar", element: <AddNewCar /> },
  { path: "/login", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
