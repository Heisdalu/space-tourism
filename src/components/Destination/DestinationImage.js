import style from "./DestinationImage.module.css";

const DestinationImage = (props) => {
  return (
    <figure className={style.planetImage}>
      <picture>
        <source srcSet={props.webpImg} />
        <img src={props.pngImg} alt="the moon" />
      </picture>
    </figure>
  );
};


export default DestinationImage;