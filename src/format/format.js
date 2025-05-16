export const formatPriceText = (price) => {
  const number = Number(price);
  if (isNaN(number)) return "";

  if (number >= 1000000)
    return `${(number / 1000000).toLocaleString("fa-IR")} میلیون تومان`;

  if (number >= 1000)
    return `${(number / 1000).toLocaleString("fa-IR")} هزار تومان`;

  return `${number.toLocaleString("fa-IR")} تومان`;
};
