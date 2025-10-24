import FirstviewImg from "./../assets/dog.jpg";

export default function Firstview({ children }) {
  return (
    <div style={{ backgroundColor: "#ffffe0" }}>
      <img
        src={FirstviewImg}
        alt="犬の画像"
        style={{
          width: "100%",
          maxHeight: "500px",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />
    </div>
  );
}
