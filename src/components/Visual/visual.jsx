import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReport } from "../../redux/fetchReport";
import { updateMonth} from "../../redux/fetchReport";
import { Form } from "react-bootstrap";
import "./visual.css"
function Visual (){
  const dispatch = useDispatch();
  const reportData = useSelector((state)=>state.report.data)
  let month = useSelector((state)=>state.report.month)
  
  const june= {
    start: "2024-06-01",
    end: "2024-06-30",
  }
  const july= {
    start: "2024-07-01",
    end: "2024-07-31",
  }

  useEffect(() => {
    dispatch(fetchReport(month));
  }, [dispatch,month]);



let date=reportData.map((report)=>{
    return report.day.slice(-2)
})
let count=reportData.map((report)=>{
  return report.orderCount
})

    return(
      <div style={{ marginTop:32}}>
        <div className='topDashboard'>
        Dashboard
        </div>
          <div className='rentedCar'>
            Rented Car Data Visualization
          </div>
        <Form.Select
        onChange={(e) => dispatch(updateMonth(JSON.parse(e.target.value))) }
        aria-label="Default select example"
      >
        <option value={JSON.stringify(june)}>June</option>
        <option value={JSON.stringify(july)}>July</option>

      </Form.Select>
      
        <Bar 
        data={{
          labels:date,
          datasets:[{
            label:"Amount of Car Rented",
            data:count
          }]
        }}
        />
        </div>
    )
}

export default Visual