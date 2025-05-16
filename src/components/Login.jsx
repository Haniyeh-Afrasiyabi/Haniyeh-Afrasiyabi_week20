import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schema/login";
import getInputs from "../constants/input";
import icon from "../assets/Union.png";
import styles from "./signUp&Login.module.css";
import { login } from "../services/config";
import { toast } from "react-toastify";
import { useNavigate, NavLink } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const inputs = getInputs(register, "login");

  const onSubmit = async (data) => {
    const payload = {
      username: data.userName.toLowerCase(),
      password: data.password,
    };
    console.log(payload);

    try {
      const result = await login(payload);

      toast.success("ثبت‌نام با موفقیت انجام شد!");

      localStorage.setItem("token", result.token);
      localStorage.setItem("username", payload.username);
      navigate("/dashboard");
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
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>بوت کمپ بوتواستارت</h1>
        <div className={styles.container}>
          <div className={styles.icon}>
            <img src={icon} alt="" />
          </div>
          <h3> فرم ورود</h3>
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

          <button className={styles.button}> ورود</button>
          <span>
            <NavLink to="/">ایجاد حساب کاربری! </NavLink>
          </span>
        </div>
      </form>
    </div>
  );
}
export default Login;
