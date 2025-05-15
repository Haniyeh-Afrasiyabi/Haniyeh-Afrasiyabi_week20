import { useContext } from "react";
import { ProductsContext } from "./Dashboard";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addProductSchema } from "../schema/addProduct";
import getInputAddProduct from "../constants/inputAddProduct";
import { addProduct } from "../services/authService";
import { toast } from "react-toastify";

import styles from "../components/modalAddProduct.module.css";

function ModalAddProduct() {
  const { state, dispatch } = useContext(ProductsContext);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(addProductSchema),
  });

  const inputsAddProduct = getInputAddProduct(register);

  if (!state.modalAddProduct?.show) return null;

  const onSubmit = async (data) => {
    const payload = {
      name: data.nameProduct.toLowerCase(),
      price: data.price,
      quantity: data.quantity,
    };

    try {
      const result = await addProduct(payload);
      dispatch({ type: "AddProduct", payload: result });
      dispatch({ type: "CloseAddProductModal" });
      toast.success("محصول با موفقیت ایجاد شد ✅");
    } catch (error) {
      toast.error("خطا در ایجاد محصول ❌");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className={styles.title}>ایجاد محصول جدید</h3>

          {inputsAddProduct.map((input, index) => (
            <div className={styles.inputContainer} key={index}>
              <label className={styles.label}>{input.label}</label>
              <input
                className={styles.input}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                {...input.register}
              />
              {errors[input.name] && <span>{errors[input.name]?.message}</span>}
            </div>
          ))}

          <div className={styles.buttons}>
            <button className={styles.addButton} type="submit">
              ایجاد
            </button>
            <button
              className={styles.cancelButton}
              type="button"
              onClick={() => dispatch({ type: "CloseAddProductModal" })}
            >
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalAddProduct;
