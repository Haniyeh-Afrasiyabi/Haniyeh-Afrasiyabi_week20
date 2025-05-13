import { object, string, ref } from "yup";

export let userSchema = object({
  userName: string()
    .required("نام کاربری الزامی است")
    .min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد"),
  password: string()
    .required("رمز عبور الزامی است")
    .min(4, "رمز عبور باید حداقل ۴ کاراکتر باشد"),
  confirmPassword: string()
    .oneOf([ref("password")], "رمز عبور یکسان نیست")
    .required("تکرار رمز عبور الزامی است"),
});
