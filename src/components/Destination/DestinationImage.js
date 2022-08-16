import { useParams } from "react-router-dom";
import style from "./DestinationImage.module.css";
import Moon_Webp from "../../assets/moon1.webp";
import Moon_Png from "../../assets/moon2.png";

const imagesList = [
  {id: 'moon',}
]

const DestinationImage = (props) => {
  const params = useParams();
  console.log(params);
  return (
    <figure className={style.planetImage}>
      <picture>
        <source srcSet={Moon_Webp} />
        <img src={Moon_Png} alt="the moon" />
      </picture>
    </figure>
  );
};


export default DestinationImage;