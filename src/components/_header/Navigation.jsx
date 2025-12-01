import styles from "./Navigation.module.css";

export default function Navigation() {
  const navList = ["Top", "Skills", "Works", "Contact"];

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {navList.map((item) => (
          <li key={item} className={styles.li}>
            <a href={`#${item.toLowerCase()}`} className={styles.a}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// const styles = {
//   nav: { width: "100%", textAlign: "left", paddingRight: "2rem" },
//   ul: { listStyle: "none", display: "flex", gap: "1.5rem" },
//   li: {},
//   a: { color: "#333", textDecoration: "none", fontSize: "0.9rem" },
// };
