const getInputs = (register, type = "signup") => {
  const inputs = [
    {
      type: "text",
      name: "userName",
      placeholder: "نام کاربری",
      register: register("userName"),
    },
    {
      type: "password",
      name: "password",
      placeholder: "رمز عبور",
      register: register("password"),
    },
  ];

  if (type === "signup") {
    inputs.push({
      type: "password",
      name: "confirmPassword",
      placeholder: "تکرار رمز عبور",
      register: register("confirmPassword"),
    });
  }

  return inputs;
};
export default getInputs;
