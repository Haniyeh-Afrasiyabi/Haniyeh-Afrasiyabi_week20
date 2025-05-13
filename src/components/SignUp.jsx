import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../schema/signUp";
import getInputs from "../constants/input";
import icon from "../assets/Union.png";
import styles from "./signUp.module.css";
import { signUp } from "../services/authService";
import { toast } from "react-toastify";

function SignUp() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const inputs = getInputs(register);

  const onSubmit = async (data) => {
    const { userName, password } = data;
    console.log("ارسال به API:", { userName, password });

    try {
      const result = await signUp({ userName, password });

      toast.success("ثبت‌نام با موفقیت انجام شد!");
    } catch (error) {
      const status = error.response?.status;
      console.log("خطای کامل:", error.response);

      if (status === 409) {
        toast.error("این نام کاربری قبلاً ثبت شده است");
      } else if (status === 400) {
        toast.error("اطلاعات وارد شده معتبر نیست");
      } else {
        toast.error("مشکلی در ثبت‌نام رخ داده است");
      }
    }
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>بوت کمپ بوتواستارت</h1>
      <div className={styles.container}>
        <div className={styles.icon}>
          <img src={icon} alt="" />
        </div>
        <h3>فرم ثبت نام</h3>
        {inputs.map((input, index) => (
          <div key={index} className={styles.container_input}>
            <input
              type={input.type}
              className={styles.input}
              placeholder={input.placeholder}
              {...input.register}
            />
            {errors[input.name] && <span>{errors[input.name]?.message}</span>}
          </div>
        ))}

        <button>ثبت نام</button>
        <span>حساب کاربری دارید؟</span>
      </div>
    </form>
  );
}
export default SignUp;
