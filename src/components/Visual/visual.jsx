import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReport } from "../../redux/fetchReport";
import { updateMonth } from "../../redux/fetchReport";
import { Form } from "react-bootstrap";
import "./visual.css";
const june = {
  start: "2024-06-01",
  end: "2024-06-30",
};
const july = {
  start: "2024-07-01",
  end: "2024-07-31",
};
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);
function Visual() {
  const dispatch = useDispatch();
  const reportData = useSelector((state) => state.report.data);
  let month = useSelector((state) => state.report.month);

  useEffect(() => {
    dispatch(fetchReport(june));
  }, [dispatch]);

  let date = reportData.map((report) => {
    return report.day.slice(-2);
  });
  let count = reportData.map((report) => {
    return report.orderCount;
  });

  return (
    <div style={{ marginTop: 32 }}>
      <div className="topDashboard">Dashboard</div>
      <div className="rentedCar">Rented Car Data Visualization</div>
      <div className="month">Month</div>
      <div style={{ display: "flex", marginTop: 8 }}>
        <Form.Select
          className="monthDropdown"
          onChange={(e) => dispatch(updateMonth(JSON.parse(e.target.value)))}
          aria-label="Default select example"
        >
          <option value={JSON.stringify(june)}>June</option>
          <option value={JSON.stringify(july)}>July</option>
        </Form.Select>
        <button
          className="goButton"
          onClick={() => {
            dispatch(fetchReport(month));
          }}
        >
          Go
        </button>
      </div>
      <Bar
        className="visual"
        options={{
          plugins: { legend: { display: false } },
          scales: {
            y: {
              title: {
                display: true,
                text: "Amount of Car Rented",
              },
            },
            x: {
              title: {
                display: true,
                text: "Date",
              },
            },
          },
        }}
        data={{
          labels: date,
          datasets: [
            {
              data: count,
            },
          ],
        }}
      />
    </div>
  );
}

export default Visual;
