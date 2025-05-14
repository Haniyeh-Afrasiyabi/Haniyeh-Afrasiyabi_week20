import styles from "../components/headerDashboard.module.css";
import searchIcon from "../assets/search_icon/search-normal.png";
import profileAvatar from "../assets/profileAvatar/49a9d4a2187883bfc87aeae832ffd1ccba1e9061.jpg";

function HeaderDashboard() {
  const username = localStorage.getItem("username");
  return (
    <header className={styles.header}>
      <div className={styles.searchBox}>
        <img src={searchIcon} alt="" />
        <input type="text" placeholder="جستجو کالا" />
      </div>

      <div className={styles.profileInfo}>
        <img
          className={styles.profileAvatar}
          src={profileAvatar}
          alt="avatar"
        />
        <div className={styles.profileText}>
          <p className={styles.profileName}> {username}</p>
          <span className={styles.profileRole}>مدیر</span>
        </div>
      </div>
    </header>
  );
}

export default HeaderDashboard;
