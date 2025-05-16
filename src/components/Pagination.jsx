import { useContext } from "react";
import { ProductsContext } from "./Dashboard";

function Pagination() {
  const { state, dispatch } = useContext(ProductsContext);

  const totalItems = state.products.filter((product) =>
    [product.name, product.id, product.price, product.quantity]
      .map((val) => String(val).toLowerCase())
      .some((field) => field.includes(state.searchTerm))
  ).length;

  const totalPages = Math.ceil(totalItems / state.itemsPerPage);
  const currentPage = state.currentPage;

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    dispatch({ type: "SetCurrentPage", payload: page });
  };

  return (
    <div
      style={{
        marginTop: "1rem",
        display: "flex",
        gap: "6px",
        alignItems: "center",
      }}
    >
      {/* 🔹 صفحه قبل */}
      <button
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
      >
        ◀ قبلی
      </button>

      {/* 🔸 دکمه‌های صفحات */}
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => goToPage(i + 1)}
          style={{
            padding: "4px 10px",
            backgroundColor: currentPage === i + 1 ? "#444" : "#eee",
            color: currentPage === i + 1 ? "#fff" : "#000",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {i + 1}
        </button>
      ))}

      {/* 🔹 صفحه بعد */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
      >
        بعدی ▶
      </button>
    </div>
  );
}

export default Pagination;
