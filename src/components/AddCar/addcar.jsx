import "./addcar.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
function AddCar() {
  const [formData, setFormData] = useState({
    name: "",
    category: "small",
    price: "",
    image: "",
  });
  const onImageChange = (e) => {
    const newImageData = { ...formData, image: e.target.files[0] };
    setFormData(newImageData);
  };
  const onInputChange = (e) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://api-car-rental.binaracademy.org/admin/car",
        {
          method: "POST",
          headers: {
            access_token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        Navigate("/dashboard");
      } else {
        throw new Error(response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };

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
            id="name"
            name="name"
            type="text"
            placeholder="Input Nama/Tipe Mobil"
            className="search-box"
            onChange={onInputChange}
          />
        </div>
        <div className="divline">
          <span className="text-box">Harga*</span>
          <input
            id="price"
            name="price"
            type="text"
            placeholder="Input Harga Sewa Mobil"
            className="search-box"
            onChange={onInputChange}
          />
        </div>
        <div className="divline-foto">
          <span className="text-box">Foto*</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              id="image"
              name="image"
              type="file"
              placeholder="Upload Foto Mobil"
              className="search-box"
              onChange={onImageChange}
            />
            <span className="max-size">File size max. 2MB</span>
          </div>
        </div>

        <div className="divline">
          <span className="text-box">Kategori*</span>
          <select
            className="search-box"
            id="category"
            name="category"
            onChange={onInputChange}
          >
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
        <button className="save-button" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </>
  );
}

export default AddCar;
