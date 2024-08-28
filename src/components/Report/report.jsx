import { useEffect } from "react";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/fetchCar";
import { useState } from "react";
import { Button, Form, Pagination, Table } from "react-bootstrap";
import styles from "./App.module.css";
import { updatePage, updateLimit } from "../../redux/fetchCar";

function Report() {
  const dispatch = useDispatch();
  const mobilList = useSelector((state) => state.mobil.data);
  let page = useSelector((state) => state.mobil.page);
  let limit = useSelector((state) => state.mobil.limit);
  const [tempPage, setTempPage] = useState(1);

  useEffect(() => {
    dispatch(fetchData({ page, limit }));
  }, [dispatch, limit, page]);

  return (
    <div style={{ marginTop: 84 }}>
      <div className={styles.dashboardHeader}>Dashboard</div>
      <div className={styles.listOrder}>List Order</div>
      <Table className={styles.table}>
        <thead>
          <tr style={{ borderRadius: 2 }}>
            <th className={styles.tableHead}>No</th>
            <th className={styles.tableHead}>User Email</th>
            <th className={styles.tableHead}>Start Rent</th>
            <th className={styles.tableHead}>Finish Rent</th>
            <th className={styles.tableHead}>Price</th>
            <th className={styles.tableHead}>Category</th>
          </tr>
        </thead>
        <tbody>
          {mobilList.orders?.map((mobil, index) => (
            <tr key={mobil.id}>
              <td>{(page - 1) * limit + index + 1}</td>
              <td>{mobil.User.email}</td>
              <td>{dayjs(mobil.start_rent_at).format("DD MMMM YYYY")}</td>
              <td>{dayjs(mobil.finish_rent_at).format("DD MMMM YYYY")}</td>
              <td>
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(mobil?.total_price) ||
                  new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(mobil?.price)}
              </td>
              <td>{mobil.Car?.category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <div className={styles.pageOption}>
            <div className={styles.pageOptionText}>Limit</div>
            <Form.Select
              onChange={(e) => dispatch(updateLimit(e.target.value))}
              value={limit}
              aria-label="Default select example"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </Form.Select>
          </div>

          <div className={styles.pageJumper}>
            <div className={styles.pageOption}>
              <div className={styles.pageOptionText}>Jump to page</div>
              <Form.Select
                onChange={(e) => setTempPage(e.target.value)}
                value={tempPage}
                aria-label="Default select example"
              >
                {Array(mobilList.pageCount)
                  .fill()
                  .map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
              </Form.Select>
            </div>

            <Button onClick={() => dispatch(updatePage(tempPage))}>Go</Button>
          </div>
        </div>
        <Pagination>
          <Pagination.First
            onClick={() => {
              dispatch(updatePage(1));
            }}
          />
          <Pagination.Item
            onClick={() => {
              dispatch(updatePage(1));
            }}
          >
            1
          </Pagination.Item>
          <Pagination.Item
            onClick={() => {
              dispatch(updatePage(2));
            }}
          >
            2
          </Pagination.Item>
          <Pagination.Item
            onClick={() => {
              dispatch(updatePage(3));
            }}
          >
            3
          </Pagination.Item>

          <Pagination.Item
            onClick={() => {
              dispatch(updatePage(mobilList.pageCount));
            }}
          >
            {mobilList.pageCount}
          </Pagination.Item>
          <Pagination.Last
            onClick={() => {
              dispatch(updatePage(mobilList.pageCount));
            }}
          />
        </Pagination>
      </div>
    </div>
  );
}

export default Report;
