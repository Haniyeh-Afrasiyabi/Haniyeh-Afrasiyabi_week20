import { useContext, useEffect } from "react";
import { ProductsContext } from "./Dashboard";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "../schema/productSchema";
import getInputProduct from "../constants/inputAddProduct";
import { editProduct } from "../services/authService";
import { toast } from "react-toastify";

import styles from "../components/modalAddProduct.module.css";

function ModalEditProduct() {
  const { state, dispatch } = useContext(ProductsContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  });

  const inputsProduct = getInputProduct(register);

  const editingProduct = state.modalEditProduct?.data;
  useEffect(() => {
    if (editingProduct) {
      setValue("nameProduct", editingProduct.name);
      setValue("quantity", editingProduct.quantity);
      setValue("price", editingProduct.price);
    }
  }, [editingProduct, setValue]);

  if (!state.modalEditProduct?.show) return null;

  const onSubmit = async (data) => {
    const payload = {
      name: data.nameProduct.toLowerCase(),
      price: data.price,
      quantity: data.quantity,
    };

    try {
      const result = await editProduct(editingProduct.id, payload);
      dispatch({ type: "editProduct", payload: result });
      dispatch({ type: "CloseEditProductModal" });
      toast.success("محصول با موفقیت ویرایش شد");
    } catch (error) {
      toast.error("ویرایش محصول ناموفق بود");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className={styles.title}>ویرایش اطلاعات </h3>

          {inputsProduct.map((input, index) => (
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
              ثبت اطلاعات جدید
            </button>
            <button
              className={styles.cancelButton}
              type="button"
              onClick={() => dispatch({ type: "CloseEditProductModal" })}
            >
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalEditProduct;
