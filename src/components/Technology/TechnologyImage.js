import style from "./TechnologyImage.module.css";
import { useParams } from "react-router-dom";
import { techData } from "../../lib/tech-data";

const TechnologyImage = () => {
  const { id } = useParams();
  const user = techData.find((el) => el.id === id);

  if (!user) return;

  return (
    <figure className={style.technologyImage}>
      <picture>
        <source srcSet={user.images.mobile_webp} media="(max-width:760px)" />
        <source srcSet={user.images.mobile_png} media="(max-width:768px)" />
        <source srcSet={user.images.desktop_webp} media="(min-width:1200px)" />
        <source srcSet={user.images.desktop_png} media="(min-width:1200px)" />
        <img
          src={user.images.mobile_png}
          alt={`${user.title} pic`}
          height="300px" width='300px'
        />
      </picture>
    </figure>
  );
};

export default TechnologyImage;
