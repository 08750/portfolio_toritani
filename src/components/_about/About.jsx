import BlackFish from "../../assets/blackFish.png";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <h3 className={styles.h3}>About</h3>
        <img src={BlackFish} alt="icon" className={styles.BlackFishImg} />
      </div>
      <p className={styles.text}>2002年生まれ兵庫県出身</p>
      <div>
        <p className={styles.text}>
          美容専門学校でメイクを学び、美容師国家資格を取得。その後、アイリストとして約2年間サロン勤務し、入社半年で200人中10位以内の売上を記録しました。
          退職後は、Webデザインを学ぶため職業訓練校へ。美容で磨いた“見せる力”と感性を活かして、やさしく心に残るデザインを目指しています。
        </p>

        <div className={styles.btnWrap}>
          <button className={styles.btn}>and more...</button>
        </div>
      </div>
    </div>
  );
}
