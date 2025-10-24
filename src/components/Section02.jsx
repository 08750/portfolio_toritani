import DogfoodImg from "./../assets/dogfood.jpg";

export default function Section02() {
  return (
    <>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          padding: "40px",
          backgroundColor: "#ffffe0",
        }}
      >
        <img
          src={DogfoodImg}
          alt="犬の餌"
          style={{
            width: "40%",
            height: "auto",
            borderRadius: "10px",
            margin: "0 auto",
          }}
        />

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          これは最高級のドッグフードです！
        </p>
      </section>
    </>
  );
}
