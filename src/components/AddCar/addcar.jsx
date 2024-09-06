import "./addcar.css";
import axios from "axios";
import { useEffect, useState } from "react";
function AddCar() {
  useEffect(() => {
    const addData = async () => {
      const response = await axios.post(
        "https://api-car-rental.binaracademy.org/admin/car",
        {
          headers: {
            access_token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
          },
          params: {},
        }
      );
    };
  });

  return (
    <>
      <div style={{ display: "flex", marginTop: 32, height: 18 }}>
        <span className="header">Cars &gt;</span>
        <span className="header"> List Cars &gt;</span>
        <span className="listcar"> Add New Car</span>
      </div>
      <div className="addCarHeader">Add New Car</div>
      <div className="addcarBox">
        <div className="divline">
          <span className="text-box">Nama/Tipe Mobil*</span>
          <input
            type="text"
            placeholder="Input Nama/Tipe Mobil"
            className="search-box"
          />
        </div>
        <div className="divline">
          <span className="text-box">Harga*</span>
          <input
            type="text"
            placeholder="Input Harga Sewa Mobil"
            className="search-box"
          />
        </div>
        <div className="divline-foto">
          <span className="text-box">Foto*</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="text"
              placeholder="Upload Foto Mobil"
              className="search-box"
            />
            <span className="max-size">File size max. 2MB</span>
          </div>
        </div>

        <div className="divline">
          <span className="text-box">Kategori*</span>
          <select className="search-box">
            <option value="small">2 - 4 orang</option>
            <option value="medium">4 - 6 orang</option>
            <option value="large">6 - 8 orang</option>
          </select>
        </div>
        <div style={{ marginBottom: 24 }}>Created at</div>
        <div>Updated at</div>
      </div>

      <div className="button-div">
        <button className="cancel-button">Cancel</button>
        <button className="save-button">Save</button>
      </div>
    </>
  );
}

export default AddCar;
