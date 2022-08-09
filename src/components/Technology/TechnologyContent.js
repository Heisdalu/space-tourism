import style from "./TechnologyContent.module.css";

const TechnologyContent = () => {
  return (
    <div className={style.contentBox}>
      <h1 className={style.contentHeader}>
        <span className={style.contentTitle}>THE TERMINOLOGY…</span>
        <span className={style.contentSubtitle}>LAUNCH VEHICLE</span>
      </h1>

      <p className={style.content}>
        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to
        carry a payload from Earth's surface to space, usually to Earth orbit or
        beyond. Our WEB-X carrier rocket is the most powerful in operation.
        Standing 150 metres tall, it's quite an awe-inspiring sight on the
        launch pad!
      </p>
    </div>
  );
};

export default TechnologyContent;
