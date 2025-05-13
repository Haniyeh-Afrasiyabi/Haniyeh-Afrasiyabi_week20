import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schema/login";
import getInputs from "../constants/input";
import icon from "../assets/Union.png";
import styles from "./signUp.module.css";

function Login() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const inputs = getInputs(register, "login");

  const onSubmit = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
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

        <button> ورود</button>
        <span>ایجاد حساب کاربری!</span>
      </div>
    </form>
  );
}
export default Login;
