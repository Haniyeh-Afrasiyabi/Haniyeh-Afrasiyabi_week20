import edit_icon from "../assets/edit_trash_icon/edit.png";
import trash_icon from "../assets/edit_trash_icon/trash.png";
import styles from "./tableProductItem.module.css"

function TableProductItem({ product }) {
  return (
    <tr className={styles.tr_productItem} key={product.id}>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td>{product.price}</td>
      <td>{product.id}</td>
      <td>
        <button  className={styles.button}>
          <img src={edit_icon} alt="" />
        </button >
        <button className={styles.button}>
          <img src={trash_icon} alt="" />
        </button>
      </td>
    </tr>
  );
}

export default TableProductItem;
