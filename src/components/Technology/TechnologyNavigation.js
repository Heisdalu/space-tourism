import style from "./TechnologyNavigation.module.css";

const TechnologyNavigation = (props) => {
  return (
    <nav className={style.navBox}>
      <button className={style.link}>1</button>
      <button className={style.link}>2</button>
      <button className={style.link}>3</button>
    </nav>
  );
};

export default TechnologyNavigation;
