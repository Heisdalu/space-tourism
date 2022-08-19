import {useParams } from "react-router-dom";
import style from "./DestinationImage.module.css";
import { destinationContent } from "../../lib/data";

const DestinationImage = (props) => {
  const { id } = useParams();
  const data = destinationContent.find((el) => el.id === id);

  if(!data) return;

  return (
    <figure className={style.planetImage}>
      <picture>
        <source srcSet={data.images.webp} type="image/webp" />
        <img src={data.images.png} alt={data.title + " pic"} />
      </picture>
    </figure>
  );
};

export default DestinationImage;
