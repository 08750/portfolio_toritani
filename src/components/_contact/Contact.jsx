import WhiteFish from "../../assets/whiteFish.png";
import Button from "../_button/Button";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.wrap}>
        <h2 className={styles.title}>Contact</h2>
        <img
          src={WhiteFish}
          alt="白色の魚のイラスト"
          className={styles.WhiteFish}
        />
      </div>

      <div className={styles.formwrap}>
        <form className={styles.form}>
          <div className={styles.namewrap}>
            <p className={styles.name}>Name</p>
            <input type="text" placeholder="名前" className={styles.input} />
          </div>
          <div className={styles.namewrap}>
            <p className={styles.name}>Email</p>
            <input type="email" placeholder="メール" className={styles.input} />
          </div>
          <div className={styles.namewrap}>
            <p className={styles.name}>Message</p>
            <textarea
              placeholder="メッセージ"
              rows="5"
              className={styles.textarea}
            />
          </div>
          <button type="submit" className={styles.button}>
            送信
          </button>
        </form>
      </div>
    </section>
  );
}
