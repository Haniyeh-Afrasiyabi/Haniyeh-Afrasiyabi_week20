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
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", gap: "6px" }}>
        {/* 🔹 صفحه قبل */}
        <button
          style={{
            borderRadius: "50%",
            cursor: "pointer",
            padding: "6px 4px",
            backgroundColor: currentPage === 1 ? "#FFFFFF" : "#55A3F0",
            color: currentPage === 1 ? "#8D8D8D80" : "#FFFFFF",
            border:
              currentPage === 1 ? "2px solid #8D8D8D80" : "2px solid #55A3F0",
          }}
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
        >
          ▶ قبلی
        </button>

        {/* 🔸 دکمه‌های صفحات */}
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            style={{
              padding: "4px 10px",
              backgroundColor: currentPage === i + 1 ? "#55A3F0" : "#FFFFFF",
              color: currentPage === i + 1 ? "#FFFFFF" : "#8D8D8D80",
              border:
                currentPage === i + 1
                  ? "2px solid #55A3F0"
                  : "2px solid #8D8D8D80",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          >
            {i + 1}
          </button>
        ))}

        {/* 🔹 صفحه بعد */}
        <button
          style={{
            borderRadius: "50%",
            cursor: "pointer",
            padding: "6px 4px",
            backgroundColor: currentPage === 1 ? "#55A3F0" : "#FFFFFF",
            color: currentPage === 1 ? "#FFFFFF" : "#8D8D8D80",
            border:
              currentPage === 1 ? "2px solid #55A3F0" : "2px solid #8D8D8D80",
          }}
          disabled={currentPage === totalPages}
          onClick={() => goToPage(currentPage + 1)}
        >
          بعدی ◀
        </button>
      </div>
    </div>
  );
}

export default Pagination;
