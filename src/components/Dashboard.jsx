import { createContext, useReducer, useEffect } from "react";
import styles from "../components/dashboard.module.css";
import { getAllProducts } from "../services/authService";
import HeaderDashboard from "./HeaderDashboard";
import MainDashboard from "./Maindashboard";
import ModalDeleteSingle from "./ModalDeleteSingle";

export const ProductsContext = createContext();

const initialState = {
  products: [],
  modalDeleteSingle: { show: false, id: null },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "products":
      return { ...state, products: action.payload };
    case "ShowDeleteSingleModal":
      return {
        ...state,
        modalDeleteSingle: { show: true, id: action.payload },
      };
    case "CloseModalDeleteSingle":
      return {
        ...state,
        modalDeleteSingle: { show: false, id: null },
      };
    case "DeleteProduct":
      return {
        ...state,
        products: state.products.filter((product) => 
          product.id !== action.payload
        ),
      };
  }
};

function Dashboard() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const result = await getAllProducts();
        // console.log(result);
        dispatch({ type: "products", payload: result.data });
      } catch (error) {
        console.error("خطا در گرفتن لیست محصولات:", error);
      }
    };
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      <HeaderDashboard />
      <MainDashboard />
      <ModalDeleteSingle />
    </ProductsContext.Provider>
  );
}

export default Dashboard;
