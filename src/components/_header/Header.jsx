import Navigation from "./Navigation";

export default function Header() {
  return (
    <header style={styles.header}>
      <Navigation />
    </header>
  );
}
const styles = {
  header: {
    width: "100%",
    backgroundColor: "#FFF9B0",
    padding: "1rem 0",
  },
};
