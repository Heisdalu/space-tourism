import { useParams } from "react-router-dom";
import { crewData } from "../../lib/crew-data";
import style from "./CrewImage.module.css";

const CrewImage = () => {
  const { name } = useParams();

  const user = crewData.find((el) => el.id === name);
  if (!user) return;

  return (
    <figure className={style.crewImage}>
      <picture>
        <source srcSet={user.images.desktop_webp} media="(min-width:1200px)" />
        <source srcSet={user.images.desktop_png} media="(min-width:1200px)" />
        <source srcSet={user.images.mobile_webp} media="max-width:768px" />
        <img
          src={user.images.mobile_png}
          alt="douglas henry"
          height="400px"
          width="300px"
        />
      </picture>
    </figure>
  );
};

export default CrewImage;
