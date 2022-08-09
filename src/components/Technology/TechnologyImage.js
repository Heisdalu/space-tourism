import style from "./TechnologyImage.module.css";

const TechnologyImage = (props) => {
  return (
    <figure className={style.technologyImage}>
      <picture>
        <source srcSet={props.desktopPng} media="(min-width:1200px)" />
        <source srcSet={props.mobileWep} media="(min-width:200px)" />
        <img src={props.mobileWep} alt="" />
      </picture>
    </figure>
  );
};

export default TechnologyImage;
