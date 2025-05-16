import { useContext } from "react";
import { ProductsContext } from "./Dashboard";
import edit_icon from "../assets/edit_trash_icon/edit.png";
import trash_icon from "../assets/edit_trash_icon/trash.png";
import styles from "./tableProductItem.module.css";

function TableProductItem({ product }) {
  const { dispatch } = useContext(ProductsContext);
  console.log(dispatch);
  return (
    <tr className={styles.tr_productItem} key={product.id}>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td>{product.price}</td>
      <td>{product.id}</td>
      <td>
        <button
          className={styles.button}
          onClick={() =>
            dispatch({ type: "ShowEditProductModal", payload: product })
          }
        >
          <img src={edit_icon} alt="ویرایش" />
        </button>
        <button
          className={styles.button}
          onClick={() =>
            dispatch({ type: "ShowDeleteSingleModal", payload: product.id })
          }
        >
          <img src={trash_icon} alt="" />
        </button>
      </td>
    </tr>
  );
}

export default TableProductItem;
