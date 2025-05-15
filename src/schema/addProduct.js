import { object, string } from "yup";

export const addProductSchema = object({
  nameProduct: string()
    .required("نام کالا الزامی است")
    .min(2, "نام کالا حداقل باید ۲ حرف باشد"),
  price: string()
    .required("قیمت الزامی است"),
    // .min(1000, "قیمت باید حداقل ۱۰۰۰ تومان باشد"),
  quantity: string()
    .required("موجودی الزامی است")
    .min(1, "موجودی باید حداقل ۱ عدد باشد"),
});
