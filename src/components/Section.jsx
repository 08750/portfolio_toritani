import SectionImg from "./../assets/dog03.jpg";
import SectionImg02 from "./../assets/dog04.jpg";
import SectionImg03 from "./../assets/dog05.jpg";

export default function Section({}) {
  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "40px",
          backgroundColor: "#ffffe0",
        }}
      >
        <img
          src={SectionImg}
          alt="犬の画像"
          style={{ maxWidth: "30%", height: "auto", borderRadius: "10px" }}
        />
        <img
          src={SectionImg02}
          alt="犬の画像"
          style={{
            maxWidth: "30%",
            height: "auto",
            borderRadius: "10px",
          }}
        />
        <img
          src={SectionImg03}
          alt="犬の画像"
          style={{ maxWidth: "30%", height: "auto", borderRadius: "10px" }}
        />
      </section>
    </>
  );
}
