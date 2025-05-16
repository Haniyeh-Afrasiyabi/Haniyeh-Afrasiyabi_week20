import { useContext, useCallback } from "react";
import { ProductsContext } from "./Dashboard";

// lodash.debounce library for search
import debounce from "lodash.debounce";
import styles from "./headerDashboard.module.css";

function SearchBar() {
  const { dispatch } = useContext(ProductsContext);

  // ✅ ایجاد تابع با تاخیر (debounced)
  const debouncedSearch = useCallback(
    debounce((value) => {
      dispatch({ type: "SetSearchTerm", payload: value.toLowerCase() });
    }, 300),
    [] // فقط یک بار ساخته میشه
  );

  const handleChange = (e) => {
    debouncedSearch(e.target.value);
  };

  return (
    <input
      style={{ width: "30rem" }}
      type="text"
      placeholder="جستجو در نام، شناسه، قیمت، موجودی..."
      onChange={handleChange}
      className={styles.searchInput}
    />
  );
}

export default SearchBar;
