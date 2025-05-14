import { createContext, useEffect, useState } from "react";
import styles from "../components/dashboard.module.css";
import { getAllProducts } from "../services/authService";
import HeaderDashboard from "./HeaderDashboard";
import MainDashboard from "./Maindashboard";

export const ProductsContext = createContext();

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const result = await getAllProducts();
        // console.log(result);
        setProducts(result.data);
      } catch (error) {
        console.error("خطا در گرفتن لیست محصولات:", error);
      }
    };
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      <HeaderDashboard />
      <MainDashboard />
    </ProductsContext.Provider>
  );
}

export default Dashboard;
