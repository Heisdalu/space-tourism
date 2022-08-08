import style from "./CrewImage.module.css";

const CrewImage = (props) => {
  return (
    <figure className={style.crewImage}>
      <picture>
        <source srcSet={props.desktopImage} media="(min-width:1200px)" />
        <source srcSet={props.mobileImage} media="max-width:768px" />
        <img src={props.defaultImage} alt="douglas henry" />
      </picture>
    </figure>
  );
};

export default CrewImage;
