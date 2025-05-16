import { object, string, number } from "yup";

export const productSchema = object({
  nameProduct: string()
    .required("نام کالا الزامی است")
    .min(2, "نام کالا حداقل باید ۲ حرف باشد"),

  price: number()
    .required("قیمت الزامی است")
    .typeError("قیمت باید عدد باشد")
    .min(1000, "قیمت باید حداقل ۱۰۰۰ تومان باشد"),

  quantity: number()
    .required("موجودی الزامی است")
    .typeError("موجودی باید عدد باشد")
    .min(1, "موجودی باید حداقل ۱ عدد باشد"),
});
