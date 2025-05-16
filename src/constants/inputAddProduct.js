const getInputProduct = (register) => {
  const inputsProduct = [
    {
      label: "نام کالا",
      type: "text",
      name: "nameProduct",
      placeholder: "نام کالا",
      register: register("nameProduct"),
    },
    {
      label: " تعداد موجودی",
      type: "number",
      name: "quantity",
      placeholder: " تعداد موجودی",
      register: register("quantity"),
    },
    {
      label: " قیمت",
      type: "number",
      name: "price",
      placeholder: " قیمت",
      register: register("price"),
    },
  ];
  return inputsProduct;
};

export default getInputProduct;
