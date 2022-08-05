/* eslint-disable jsx-a11y/anchor-has-content */
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.headerContainer}>
      <div className={style.innerContainer}>
        <header className={style.header}>
          <h1 className={style.headerTitle}>
            <span className={style.firstText}>SO, YOU WANT TO TRAVEL TO</span>
            <span className={style.secondText}>SPACE</span>
          </h1>
          <section className={style.headerContent}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </section>
        </header>

        <div className={style.exploreBox}>
          <p className={style.explore}>EXPLORE</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
