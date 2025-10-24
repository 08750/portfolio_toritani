export default function Header({ children }) {
  return (
    <header
      style={{
        width: "100%",
        // maxWidth: "1200px",
        // width: 1000,
        padding: 16,
        backgroundColor: "#ffffe0",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {children}
    </header>
  );
}
