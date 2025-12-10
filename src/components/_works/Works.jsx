import styles from "./Works.module.css";
import Button from "../_button/Button";
import BlackFish from "../../assets/blackFish.png";
import Blogsite from "../../assets/blogsite.png";
import Onsen from "../../assets/onsen.png";
import Poke from "../../assets/poke.png";

export default function Works() {
  return (
    <section id="works" className={styles.section}>
      <div className={styles.wrap}>
        <h2 className={styles.title}>Works</h2>
        <img src={BlackFish} alt="icon" className={styles.BlackFishImg} />
      </div>

      <div className={styles.workBox}>
        {/* <div className={styles.onsenBox}> */}
        <img
          src={Onsen}
          alt="架空温泉サイトのファーストビュー"
          className={styles.image}
        />
        <div className={styles.btnWrap}>
          <Button
            href=" https://08750.github.io/2025_10_fictional_LP/"
            label="架空温泉サイト"
          />
        </div>
        <div className={styles.textbox}>
          <p className={styles.text}>
            瀬戸内海を望む温泉リゾート「海の湯あかし汐風温泉」のLPを、デザインカンプづくりからコーディングまで、
            すべて制作しました。静かな海と温泉の“癒し”が伝わるように、やわらかい色合いや写真の見せ方を工夫し、その雰囲気がそのままサイトでも感じられるよう丁寧に実装しています。
            デザインと実装を通して、訪れたくなるようなやさしい世界観を大切にしました。
          </p>
        </div>
        {/* </div> */}
      </div>

      <div className={styles.workBox}>
        <img
          src={Blogsite}
          alt="架空ブログサイトのファーストビュー"
          className={styles.image}
        />
        <div className={styles.btnWrap}>
          <Button
            href="https://08750.github.io/reactBlogSite/"
            label="架空ブログサイト"
          />
        </div>
        <div className={styles.textbox}>
          <p className={styles.text}>
            架空のブログサイトを React で制作途中です。
            読みやすく、気持ちよく使えるブログサイトを目指して制作しています。
          </p>
        </div>
      </div>

      <div className={styles.workBox}>
        <img src={Poke} alt="ポケモン進化図鑑の画面" className={styles.image} />
        <div className={styles.btnWrap}>
          <Button href="https://08750.github.io/pokeapi/" label="ポケモンAPI" />
        </div>
        <div className={styles.textbox}>
          <p className={styles.text}>
            ポケモンAPIを使ってポケモンの進化の流れが確認できる図鑑アプリを作りました。
            まず種族データから進化チェーンのURLを取り出し、
            そこからさらに進化情報を取得することで、“どの順番で進化するのか”をわかりやすく表示しています。
            if
            文で段階ごとに分岐させ、ポケモンごとの進化が自然に理解できるように工夫しています
          </p>
        </div>
      </div>
    </section>
  );
}
