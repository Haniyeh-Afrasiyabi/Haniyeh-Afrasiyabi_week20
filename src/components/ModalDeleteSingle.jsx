import { useContext } from "react";
import { ProductsContext } from "./Dashboard";
import styles from "../components/modalDeleteSingle.module.css";
import closeIcon from "../assets/close_icon/Close.png";
import { deleteProduct } from "../services/authService";
import { toast } from "react-toastify";

function ModalDeleteSingle() {
  const { state, dispatch } = useContext(ProductsContext);
  if (!state.modalDeleteSingle?.show) return null;

  const deleteHandler = async () => {
    const id = state.modalDeleteSingle.id;

    try {
      await deleteProduct(id);
      dispatch({ type: "DeleteProduct", payload: id });
      dispatch({ type: "CloseModalDeleteSingle" });
      toast.success("محصول با موفقیت حذف شد ✅");
    } catch (error) {
      console.log(error);
      toast.error("حذف محصول با مشکل مواجه شد ❌");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div>
          <img src={closeIcon} alt="" />
        </div>
        <p>آیا از حذف این محصول مطمئنید؟</p>
        <div className={styles.buttons}>
          <button className={styles.delete} onClick={deleteHandler}>
            حذف
          </button>
          <button
            className={styles.cancel}
            onClick={() => dispatch({ type: "CloseModalDeleteSingle" })}
          >
            لغو
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalDeleteSingle;
