import styles from "./Firstview.module.css";
import Dog from "../../assets/Dogicon.png";

export default function Firstview() {
  return (
    <section id="top" className={styles.section}>
      {/* <h1 className={styles.title}>My Portfolio</h1> */}
      <div className={styles.wrap}>
        <div className={styles.circleContainer}>
          <svg className={styles.textCircle} viewBox="0 0 500 500">
            <title>dog</title>
            <defs>
              <path
                id="text_circle"
                d="M250,400 a150,150 0 0,1 0,-300 a150,150 0 0,1 0,300Z"
              />
            </defs>
            <text>
              <textPath xlinkHref="#text_circle">
                dog dog dog dog dog dog dog
              </textPath>
            </text>
          </svg>
          <img src={Dog} alt="icon" className={styles.iconImg} />
        </div>
      </div>

      {/* <p className={styles.text}>制作したものやスキルをまとめています。</p>
      <button className={styles.button}>Contact →</button> */}
    </section>
  );
}
