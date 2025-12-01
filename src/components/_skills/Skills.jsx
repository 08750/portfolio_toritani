import styles from "./Skills.module.css";
import WhiteFish from "../../assets/whiteFish.png";

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.wrap}>
        <h2 className={styles.skillTitle}>Skills</h2>
        <img
          src={WhiteFish}
          alt="白色の魚のイラスト"
          className={styles.WhiteFish}
        />
      </div>
      <div className={styles.textBox}>
        <p>
          誰にとっても使いやすく、心地よく見てもらえるサイトを目指しています。
          色や文字の見やすさ、操作のしやすさを意識して、アクセシビリティに配慮した
          デザインを心がけています。
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>HTML</h3>
          <p className={styles.skilltext}>
            基本的なHTMLの構造やタグを 理解し、簡単なWebページを作成
            できるレベルです。 一つひとつ確認しつつ進めることで
            理解を深め、丁寧にコーディング することを意識しています。
          </p>
        </div>

        <div className={styles.card}>
          <h3>CSS</h3>
          <p className={styles.skillText}>
            CSSの基礎を習得中で、レイアウトや色・余白の調整を通じてデザイン再現力を高め、
            心地よい見た目づくりを楽しみながら身につけています。
          </p>
        </div>

        <div className={styles.card}>
          <h3>JavaScript</h3>
          <p className={styles.skillText}>
            JavaScriptの基礎を学びながら、コードの仕組みや動作を理解する
            ことを意識しています。今後は実際のWebサイトに動きを
            加えられるようスキルを磨いていきます。
          </p>
        </div>

        <div className={styles.card}>
          <h3>React</h3>
          <p className={styles.skillText}>
            Reactの基礎を学びながら、コンポーネント指向の考え方や
            再利用性の高い構造を意識しています。実践を通して理解を
            深めている段階です。
          </p>
        </div>

        <div className={styles.card}>
          <h3>GitHub</h3>
          <p className={styles.skillText}>
            GitHubの基本的な操作（リポジトリ作成、コミット、プッシュなど）
            を理解しています。個人制作の進行管理やコードの記録に活用しています。
          </p>
        </div>

        <div className={styles.card}>
          <h3>Figma</h3>
          <p className={styles.skillText}>
            Figmaを使ってデザイン制作を行っています。ワイヤーフレーム作成やUIデザインの
            基本操作を理解し、必要に応じてデザインの調整を行っています。
          </p>
        </div>
      </div>
    </section>
  );
}
