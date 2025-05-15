import { useContext } from "react";
import { ProductsContext } from "./Dashboard";
import productManagement_icon from "../assets/productManagement_icon/setting-3.png";
import TableProductsList from "./TableProductsList";
import styles from "./mainDashboard.module.css";

function MainDashboard() {
  const { dispatch } = useContext(ProductsContext);
  return (
    <main>
      <div className={styles.toolbar}>
        <div>
          <img src={productManagement_icon} alt="" />
          <span>مدیریت کالا</span>
        </div>

        <button
          className={styles.buttonAddproduct}
          onClick={() => dispatch({ type: "ShowAddProductModal" })}
        >
          افزودن محصول
        </button>
      </div>
      <div>
        <TableProductsList />
      </div>
    </main>
  );
}

export default MainDashboard;
