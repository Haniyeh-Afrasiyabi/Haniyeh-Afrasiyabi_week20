import { useContext } from "react";
import { ProductsContext } from "./Dashboard";
import styles from "../components/tableProductsList.module.css";

import TableProductItem from "./TableProductItem";

function TableProductsList() {
  const { products } = useContext(ProductsContext);
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr className={styles.thead_tr}>
            <th>نام کالا</th>
            <th>موجودی</th>
            <th>قیمت</th>
            <th>شناسه کالا</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            // console.log(product)
            <TableProductItem key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TableProductsList;
