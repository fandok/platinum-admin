import "./carlist.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarList } from "../../redux/fetchCarList";
import { useEffect } from "react";
import people from "../../assets/fi_users.png";
import clock from "../../assets/fi_clock.png";
import trash from "../../assets/fi_trash-2.png";
import edit from "../../assets/fi_edit.png";
import add from "../../assets/fi_plus.png";
import modal from "../../assets/modal.png";
import dayjs from "dayjs";
import { updateSize } from "../../redux/fetchCarList";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
function CarList() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const cars = useSelector((state) => state.car.data);
  const category = useSelector((state) => state.car.size);
  const size = {
    small: "2-4 people",
    medium: "4-6 people",
    large: "6-8 people",
  };

  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    dispatch(fetchCarList(category));
  }, [category, dispatch]);

  return (
    <>
      <div style={{ display: "flex", marginTop: 32, height: 18 }}>
        <span className="header">Cars &gt;</span>
        <span className="listcar"> List Cars</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: 984,
          marginTop: 27,
        }}
      >
        <div className="listcar-title">List Car</div>
        <button className="addButton">
          <img src={add} />
          {"    "}Add New Car
        </button>
      </div>
      <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
        <button
          className="filterButton"
          onClick={() => dispatch(updateSize(""))}
        >
          All
        </button>
        <button
          className="filterButton"
          onClick={() => dispatch(updateSize("small"))}
        >
          2 - 4 people
        </button>
        <button
          className="filterButton"
          onClick={() => dispatch(updateSize("medium"))}
        >
          4 - 6 people
        </button>
        <button
          className="filterButton"
          onClick={() => dispatch(updateSize("large"))}
        >
          6 - 8 people
        </button>
      </div>
      <div className="carlist">
        {cars.map((car) => (
          // eslint-disable-next-line react/jsx-key
          <div className="carBox">
            <img src={car.image} className="carImage" />
            <div className="namatipe">{car.name}</div>
            <div className="price">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(car.price)}
              {""}
              /hari
            </div>
            <div className="category">
              <img src={people} />
              {"  "}
              {size[car.category]}
            </div>
            <div className="updated">
              <img src={clock} />
              {"  "}
              {dayjs(car.updatedAt).format("DD MMMM YYYY")}
            </div>
            <div className="buttons">
              <button className="deleteButton" onClick={handleOpen}>
                <img src={trash} />
                Delete
              </button>
              <Modal centered show={show} onHide={handleClose}>
                <Modal.Body className="modalBody">
                  <img src={modal} alt="modal" className="modalImage" />
                  <div className="modalTitle">Menghapus Data Mobil</div>
                  <div className="modalDesc">
                    Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin
                    ingin menghapus?
                  </div>
                  <div className="modalAction">
                    <Button className="modalButton">Ya</Button>
                    <Button onClick={handleClose} variant="outline-primary">
                      Tidak
                    </Button>
                  </div>
                </Modal.Body>
              </Modal>
              <button className="editButton">
                <img src={edit} />
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CarList;
