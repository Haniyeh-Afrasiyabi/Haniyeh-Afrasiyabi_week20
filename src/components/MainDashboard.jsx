import productManagement_icon from "../assets/productManagement_icon/setting-3.png";
import TableProductsList from "./TableProductsList";
import styles from "./mainDashboard.module.css"

function MainDashboard() {
  return (
    <main>
      <div className={styles.toolbar}>
        <div>
          <img src={productManagement_icon} alt="" />
          <span>مدیریت کالا</span>
        </div>

        <button className={styles.buttonAddproduct}>افزودن محصول</button>
      </div>
      <div>
        <TableProductsList />
      </div>
    </main>
  );
}

export default MainDashboard;
